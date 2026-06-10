import CLink from '@/CLink';
import { PlainBtn, SecondaryBtn } from '@/buttons';
import { NavLinksTypes, getNavLink, navLinks } from '@/layout/NavLinks';
import { ReactComponent as CloseIcon } from '@a/icons/close.svg';
import { ReactComponent as MenuIcon } from '@a/icons/menu.svg';
import bottomShape from '@a/images/layout/mobile-bottom-border.png';
import topShape from '@a/images/layout/mobile-top-border.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useEventListener from '@s/hooks/useEventListener';
import useLocationData from '@s/hooks/useLocationData';
import useRouteChange from '@s/hooks/useRouteChange';
import useScrollBlock from '@s/hooks/useScrollBlock';
import useWindowSize from '@s/hooks/useWindowSize';
import FocusTrap from 'focus-trap-react';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment, useState } from 'react';
import { NavBtn, navLinkStyles } from './NavLinkStyles';
import { flexCenter, flexSpace } from './styles/classes';

const NavSlider = styled.div<{ navOpen: boolean; navVisibility: boolean }>`
    ${flexSpace};
    flex-direction: column;
    padding-bottom: 16px;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ navOpen }) => (navOpen ? 'translateX(0)' : 'translateX(120vw)')};
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    background: linear-gradient(
            149.05deg,
            rgba(250, 176, 43, 0.15) 10.94%,
            rgba(240, 243, 243, 0.15) 37.5%,
            rgba(251, 247, 243, 0.15) 64.58%,
            rgba(43, 97, 84, 0.15) 90.1%
        ),
        ${({ theme }) => theme.colors.gray};
    visibility: ${({ navVisibility }) => (navVisibility ? 'visible' : 'hidden')};
    padding-bottom: 32px;
    padding-top: 16px;

    @media (min-width: 1280px) {
        display: none;
    }
`;

const Nav = styled.nav<{ hideShape?: boolean }>`
    ${flexCenter};
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    overflow-y: auto;
    max-heght: calc(100vh - 236px);
    padding-right: 8px;
    padding-bottom: 12px;
    gap: 40px;
    margin-top: 32px;
    margin-bottom: 32px;

    @media (min-height: 550px) {
        ::before {
            content: url(${topShape});
            position: absolute;
            top: -60px;
            right: 0;
            display: ${({ hideShape }) => (hideShape ? 'none' : 'block')};
        }

        ::after {
            content: url(${bottomShape});
            position: absolute;
            bottom: -60px;
            left: 0;
            display: ${({ hideShape }) => (hideShape ? 'none' : 'block')};
        }
    }

    @media (min-height: 660px) {
        ::before {
            top: -88px;
        }

        ::after {
            bottom: -90px;
        }
    }
`;

const CloseBtn = styled(PlainBtn)`
    position: absolute;
    top: 30px;
    right: 16px;

    @media (min-width: 768px) {
        right: 32px;
    }
`;

const BookBtn = styled(SecondaryBtn)`
    max-width: 280px;
    margin: 0 auto;
    width: 100%;
`;

export const MobNav = ({ text, links = navLinks }: { text?: string; links?: NavLinksTypes }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [navVisibility, setNavVisibility] = useState(false);

    const closeNav = () => {
        setNavOpen(false);
        setTimeout(() => setNavVisibility(false), 300);
    };

    const openNav = () => {
        setNavVisibility(true);
        setTimeout(() => setNavOpen(true), 10);
    };

    useScrollBlock(navOpen);

    const { width } = useWindowSize();

    useRouteChange(setNavOpen);

    const handleEsc = (e: KeyboardEvent) => {
        const key = e.key || e.keyCode;
        if ((key === 'Escape' || key === 'Esc' || key === 27) && navOpen) {
            closeNav();
        }
    };

    useEventListener('keydown', handleEsc);

    const { category } = useLocationData();

    return width < 1280 ? (
        <Fragment>
            {text ? (
                <NavBtn
                    onClick={openNav}
                    className={category === text ? 'current-nav-category' : ''}
                    aria-label="open nav menu"
                >
                    {text}
                </NavBtn>
            ) : (
                <PlainBtn
                    onClick={openNav}
                    css={css`
                        margin-left: 18px;

                        @media (min-width: 1280px) {
                            display: none;
                        }
                    `}
                >
                    <MenuIcon />
                </PlainBtn>
            )}

            <FocusTrap
                active={navOpen}
                focusTrapOptions={{
                    allowOutsideClick: true,
                    initialFocus: false,
                }}
            >
                <NavSlider
                    aria-label={`${navOpen ? 'close' : 'open'} navigation menu`}
                    navOpen={navOpen}
                    navVisibility={navVisibility}
                >
                    <CLink to="/">
                        <StaticImage
                            src="../../../assets/images/layout/logo.svg"
                            alt="murphy dental center"
                            width={126}
                            height={67}
                            layout="fixed"
                        />
                    </CLink>

                    <CloseBtn onClick={closeNav} aria-label="close nav menu">
                        <CloseIcon />
                    </CloseBtn>

                    <Nav hideShape={category === 'services'}>
                        {links.map((data, i) =>
                            data.links ? (
                                <MobNav text={data.text} links={data.links} key={i} />
                            ) : data.text === 'appointment' ? (
                                ''
                            ) : (
                                <CLink
                                    to={data.link}
                                    css={navLinkStyles}
                                    key={i}
                                    style={{ fontWeight: text ? 400 : 700 }}
                                >
                                    {data.text}
                                </CLink>
                            )
                        )}
                    </Nav>
                    <BookBtn as={CLink} to={getNavLink('appointment')}>
                        Book Now
                    </BookBtn>
                </NavSlider>
            </FocusTrap>
        </Fragment>
    ) : (
        <Fragment />
    );
};
