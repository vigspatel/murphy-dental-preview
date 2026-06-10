import { cache, cacheRules, makeResponseHandler } from '@modern-doc/cdk/dist/utils';

exports.handler = makeResponseHandler(async cfr => {
    //TODO: investigate iframe related issues
    //secureHeaders(cfr);

    // sets max-age=0 to disable caching for the following
    // file extensions per gatsby's recommended caching policy
    // See: https://www.gatsbyjs.com/docs/caching/
    cacheRules(cfr, ['.json', '.html', '/sw.js'], 'never');

    // anything not handled by the above (and thus not cached)
    // should be cached "forever". Gatsby generates random file
    // names for most assets and anything else will get cleared
    // out when the deployment issues a CF invalidation
    cache(cfr, 'forever');

    return cfr;
});
