import CLink from '@/CLink';
import { SecondaryBtn } from '@/buttons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SkipNavLink } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import useIntersectionObserver from '@s/hooks/useIntersectionObserver';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment, useEffect, useRef, useState } from 'react';
import { DesktopNav, NavItem } from './DesktopNavPrimitive';
import { MobNav } from './MobNav';
import { getNavLink, navLinks } from './NavLinks';
import { theme } from './styles/GlobalStyles';
import { flexSpace, px } from './styles/classes';

const Navbar = styled.header<{ scrolled: boolean }>`
    ${px};
    ${flexSpace};
    padding-top: 16px;
    padding-bottom: 16px;
    justify-content: space-between;
    z-index: 90;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid transparent;
    background-color: rgba(255, 255, 255, 0.7);

    @media (min-width: 1024px) {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: rgba(255, 255, 255, 0.85);
    }

    @media (min-width: 1900px) {
        padding: 20px calc((100vw - 1792px) / 2);
    }

    ${({ scrolled, theme }) =>
        scrolled &&
        css`
            background-color: ${theme.colors.white} !important;
            border-color: ${theme.colors.gray};
        `};
`;

export const logoStyles = css`
    transition: opacity 0.3s ease-in-out;

    :hover {
        opacity: 0.7;
    }

    :focus-visible {
        opacity: 0.7;
    }

    @media (max-width: 1279px) {
        width: 95.5px;
        height: 50.5px;
    }
`;

const DesktopNavMenu = styled(DesktopNav)`
    display: none;
    margin-left: auto;

    @media (min-width: 1280px) {
        display: block;
    }
`;

const menuStyles = css`
    gap: 48px;

    @media (min-width: 1440px) {
        gap: 72px;
    }
`;

const contentStyles = css`
    > ul {
        display: flex;
        gap: 24px;
        flex-direction: column;
        border-radius: 24px;
        padding: 48px;
        background-color: ${theme.colors.white};
        box-shadow: 0px 2px 48px rgba(43, 97, 84, 0.2);
        min-width: 430px;
    }
`;

const subMenuStyles = css`
    display: block;

    li {
        line-height: 150%;
        position: static !important;
    }
`;

const subContentStyles = css`
    z-index: 101;
    left: 100%;
    min-width: 360px;
    top: unset !important;
    margin-top: -80px;

    > ul {
        border-radius: 24px;
        padding: 24px 32px;
        background-color: ${theme.colors.white};
        box-shadow: 0px 2px 48px rgba(43, 97, 84, 0.2);
        min-width: 280px;
        gap: 16px;
        display: flex;
        flex-direction: column;
    }

    @media (max-height: 780px) {
        top: 0 !important;
        margin-top: 16px !important;
    }
`;

const lastSubContentStyles = css`
    ${subContentStyles};
    margin-top: 0 !important;
    top: 0 !important;
`;

const Observe = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    top: 10px;
    left: 0;
`;

const BookBtn = styled(SecondaryBtn)`
    @media (max-width: 1359px) {
        display: none;
    }
`;

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    const observeRef = useRef<HTMLElement | null>(null);

    const visible = useIntersectionObserver(observeRef, {});

    useEffect(() => {
        const timeout = setTimeout(() => {
            setScrolled(!visible);
        }, 100);
        return () => {
            clearTimeout(timeout);
        };
    }, [visible]);

    return (
        <Fragment>
            <Navbar scrolled={scrolled}>
                <CLink to="/">
                    <StaticImage
                        src="../../../assets/images/layout/logo.svg"
                        alt="murphy dental center"
                        css={logoStyles}
                    />
                </CLink>
                <SkipNavLink />

                <DesktopNavMenu
                    menuStyles={menuStyles}
                    contentStyles={contentStyles}
                    subMenuStyles={subMenuStyles}
                    subContentStyles={subContentStyles}
                    lastSubContentStyles={lastSubContentStyles}
                    links={navLinks.slice(0, -1)}
                >
                    <NavItem>
                        <BookBtn as={CLink} to={getNavLink('appointment')}>
                            Book Now
                        </BookBtn>
                    </NavItem>
                </DesktopNavMenu>

                <MobNav />
            </Navbar>
            <Observe ref={observeRef} />
        </Fragment>
    );
};
