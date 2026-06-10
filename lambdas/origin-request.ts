import {
    basicAuth,
    configStaticSite,
    makeRequestHandler,
    removeWww,
} from '@modern-doc/cdk/dist/utils';

exports.handler = makeRequestHandler(async cfr => {
    // strip www (301 redirect)
    removeWww(cfr);

    // handles basic-auth passwored protection if also
    // enabled within cdk.ts config
    basicAuth(cfr);

    // handles 301 redirects using simple string matching
    // or regular expression replacements
    // redirectRules(cfr, [['/test', '/']]);

    // makes sure any non file-requests (i.e. directories)
    // get rewritten to include index.html and enforce
    // directory urls to have a trailing slash (301 redirect)
    configStaticSite(cfr);

    return cfr;
});
