import { DefaultLayout } from '@s/layouts/DefaultLayout';
import { GatsbySSR } from 'gatsby';
import { cloneElement } from 'react';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
    if (element.type.Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = element.type.Layout ?? DefaultLayout;
    return <Layout {...props}>{element}</Layout>;
};
