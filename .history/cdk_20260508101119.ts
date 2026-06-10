#!/usr/bin/env node
import { App, StaticSiteStack } from '@modern-doc/cdk';

const app = new App();

// Main static site stack
StaticSiteStack.fromConfig(app, {
    default: {
        stackId: 'murphy-dental-[env]',
        env: { account: '360857340027', region: 'us-east-1' },
        lambdas: {
            'origin-request': {
                type: 'edge',
                eventType: 'origin-request',
            },
            'origin-response': {
                type: 'edge',
                eventType: 'origin-response',
            },
            contact: {
                type: 'api',
                access: ['email'],
                route: {
                    path: '/contact',
                    methods: ['POST'],
                },
            },
        },
    },
    preview: {
        domainName: 'murphy-dental.moderndocmedia.com',
        basicAuth: {
            user: 'mdm',
            password: 'pwlol123',
        },
        lambdas: {
            contact: {
                environment: {
                    EMAIL_TO: 'all@moderndocmedia.com',
                    EMAIL_FROM: 'contact@moderndocmedia.com',
                },
            },
        },
    },
    live: {
        domainName: 'murphydentalcenter.com',
        lambdas: {
            contact: {
                environment: {
                    EMAIL_TO: 'brianne@murphydentalcenter.com',
                    EMAIL_FROM: 'contact@murphydentalcenter.com',
                },
            },
        },
    },
});
