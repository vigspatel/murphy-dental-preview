import { DefaultLayout } from '@s/layouts/DefaultLayout';
import { GatsbyBrowser } from 'gatsby';
import { cloneElement } from 'react';

// eslint-disable-next-line
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
    if (element.type.Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = element.type.Layout ?? DefaultLayout;
    return <Layout {...props}>{element}</Layout>;
};
