import styled from '@emotion/styled';
import { Menu, MenuButton, MenuItems, MenuLink, MenuPopover } from '@reach/menu-button';
import useLocationData from '@s/hooks/useLocationData';
import { Link } from 'gatsby';
import { Fragment, useEffect, useRef, useState } from 'react';
import { NavLinksTypes } from './NavLinks';
import { NavBtn, subNavLinkStyles } from './NavLinkStyles';

const Div = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 32px;

    @media (min-width: 1024px) {
        margin-bottom: 0;

        :not(:last-of-type) {
            margin-right: 48px;
        }
    }
`;

const StyledMenuPopover = styled(MenuPopover)`
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    left: 50%;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &[hidden] {
        display: flex;

        &.nav-dropdown-not-expanded {
            display: none;
        }
        &.nav-dropdown-expanded {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }

    :not([hidden]) {
        &.nav-dropdown-not-expanded {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
            display: flex;
        }
        &.nav-dropdown-expanded {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    [data-reach-menu-items] {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 370px;
        margin: 75px auto 0;
        background: ${({ theme }) => theme.colors.white};
        padding: 48px;
        white-space: nowrap;
        outline: none;
        box-shadow: 0px 2px 48px rgba(43, 97, 84, 0.2);
        border-radius: 48px;
    }

`;


type PopoverProps = {
    isExpanded: boolean;
    links: NavLinksTypes;
};

const Popover = ({ isExpanded, links }: PopoverProps) => {
    const [expanded, setExpanded] = useState(isExpanded);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isExpanded) {
            timeoutId = setTimeout(() => setExpanded(true), 10);
        } else if (!isExpanded) {
            timeoutId = setTimeout(() => setExpanded(false), 300);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [isExpanded]);

    return (
        <StyledMenuPopover
            className={expanded ? 'nav-dropdown-expanded' : 'nav-dropdown-not-expanded'}
            portal={false}
        >
            <MenuItems as="nav">
                {links.map((link, i) => (
                    <MenuLink
                        key={i}
                        as={Link}
                        to={link.link}
                        activeClassName="nav-link-current-page"
                        css={subNavLinkStyles}
                    >
                        {link.text}
                    </MenuLink>
                ))}
            </MenuItems>
        </StyledMenuPopover>
    );
};

type DesktopSubNavProps = {
    text: string;
    links: NavLinksTypes;
};

export const DesktopSubNav = ({ text, links }: DesktopSubNavProps) => {
    const { category } = useLocationData();

    const button = useRef<HTMLButtonElement>(null);

    const hoverEnter = (isExpanded: boolean) => () => {
        if (window.matchMedia('(any-pointer: fine)').matches) {
            !isExpanded &&
                button.current != null &&
                button.current.dispatchEvent(new Event('mousedown', { bubbles: true }));
        }
    };

    const hoverExit = (isExpanded: boolean) => () => {
        if (window.matchMedia('(any-pointer: fine)').matches) {
            isExpanded &&
                button.current != null &&
                button.current.dispatchEvent(new Event('mousedown', { bubbles: true }));
        }
    };

    return (
        <Div>
            <Menu>
                {({ isExpanded }) => (
                    <Fragment>
                        <NavBtn
                            as={MenuButton}
                            className={category === text ? 'current-nav-category' : ''}
                            ref={button}
                            onMouseEnter={hoverEnter(isExpanded)}
                            onMouseLeave={hoverExit(isExpanded)}
                        >
                            {text}
                            <Popover isExpanded={isExpanded} links={links} />
                        </NavBtn>
                    </Fragment>
                )}
            </Menu>
        </Div>
    );
};
