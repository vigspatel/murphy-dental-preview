import { ContactUs } from '@/layout/ContactUs';
import { Footer } from '@/layout/Footer';
import { Nav } from '@/layout/Nav';
import { Seo } from '@/layout/Seo';
import { GlobalStyles, theme } from '@/layout/styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { SkipNavContent } from '@reach/skip-nav';
import { ReactNode } from 'react';

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SkipNavContent />
            <Nav />
            <Seo />
            <main>{children}</main>
            <ContactUs />
            <Footer />
        </ThemeProvider>
    );
};
