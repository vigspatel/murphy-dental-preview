#!/bin/bash

# exit when any command fails
set -e

echo "Deploying static site stack via CDK..."
npx cdk deploy -c env=detect --outputs-file ./cdk.outputs.json --all
REGION=$(cat cdk.outputs.json | jq -r '.[] | to_entries[] | select(.key|contains("Region")) | .value')
BUCKET_NAME=$(cat cdk.outputs.json | jq -r '.[] | to_entries[] | select(.key|contains("BucketName")) | .value')
DISTRIBUTION_ID=$(cat cdk.outputs.json | jq -r '.[] | to_entries[] | select(.key|contains("DistributionId")) | .value')

rm cdk.outputs.json

export AWS_DEFAULT_REGION=$REGION

echo "Syncing static site public dir to s3..."
aws s3 sync public s3://$BUCKET_NAME --delete --only-show-errors

echo "Creating CloudFront invalidation..."
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" | jq -r '.Invalidation.Id' )

echo "Waiting for CloudFront invalidation to complete..."
aws cloudfront wait invalidation-completed --id $INVALIDATION_ID --distribution-id $DISTRIBUTION_ID

echo "Deployment successful."