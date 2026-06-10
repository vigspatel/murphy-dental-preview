import CLink from '@/CLink';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/utils';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import useLocationData from '@s/hooks/useLocationData';
import { ReactNode, useState } from 'react';
import { navBtnStyles, navLinkStyles, subNavBtnStyles, subNavLinkStyles } from './NavLinkStyles';
import { NavLinksTypes } from './NavLinks';
import { flexCenter } from './styles/classes';

const MenuList = styled(NavigationMenu.List)`
    ${flexCenter};
    justify-content: flex-start;
    list-style-type: none;
    padding-inline-start: 0;
    margin: 0;

    > li {
        position: relative; // for submenu align with item
    }
`;

const Content = styled(NavigationMenu.Content)`
    position: absolute;
    top: calc(1.125rem * 1.5 + 4px); //font size x line height
    left: 0;
    width: max-content;
    z-index: 100;
    animation-duration: 300ms;
    animation-timing-function: ease;
    background: transparent !important;

    > ul {
        list-style-type: none;
        padding-inline-start: 0;
        margin-top: 24px;
        overflow-y: auto;
        max-height: calc(100vh - 120px);

        > li {
            > a {
                display: block;
            }
        }
    }

    &[data-state='open'],
    &[data-motion='from-start'] {
        animation-name: enterFromBottom;
    }

    &[data-motion='from-end'] {
        animation-name: enterFromBottom;
    }

    &[data-state='closed'],
    &[data-motion='to-start'] {
        animation-name: exitToBottom;
    }
    &[data-motion='to-end'] {
        animation-name: exitToBottom;
    }

    @keyframes enterFromBottom {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes exitToBottom {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(50px);
        }
    }
`;

type MenuProps = {
    children?: ReactNode;
    menuStyles?: SerializedStyles;
    contentStyles: SerializedStyles;
    subContentStyles?: SerializedStyles;
    lastSubContentStyles?: SerializedStyles;
    subMenuStyles?: SerializedStyles;
    links: NavLinksTypes;
    className?: string;
};

export const DesktopNav = ({
    children,
    menuStyles,
    contentStyles,
    subContentStyles,
    lastSubContentStyles,
    subMenuStyles,
    links,
    className,
}: MenuProps) => {
    const { title, category, subCategory } = useLocationData();

    const [subValue, setSubValue] = useState('');

    let delayClose: ReturnType<typeof setTimeout> | undefined;

    return (
        <NavigationMenu.Root className={className}>
            <MenuList css={menuStyles}>
                {links.map((data, i) =>
                    data.links ? (
                        <NavigationMenu.Item key={i}>
                            <NavigationMenu.Trigger
                                css={[navLinkStyles, navBtnStyles]}
                                className={
                                    category === data.text || title === data.text
                                        ? 'current-nav-category'
                                        : ''
                                }
                            >
                                {data.text}
                            </NavigationMenu.Trigger>
                            <Content css={contentStyles}>
                                <ul>
                                    {data.links?.map((subData, i) => {
                                        const subItemsWithLinks =
                                            data.links?.filter(l => l.links) ?? [];
                                        const isLastSubItem =
                                            lastSubContentStyles &&
                                            subData.links &&
                                            subItemsWithLinks[subItemsWithLinks.length - 1] ===
                                                subData;
                                        return subData.links ? (
                                            <NavigationMenu.Sub
                                                css={css`
                                                    > div:first-of-type {
                                                        position: static !important;
                                                    }
                                                `}
                                                key={i}
                                                defaultValue=""
                                                value={subValue}
                                                onValueChange={setSubValue}
                                            >
                                                <MenuList css={subMenuStyles}>
                                                    <NavigationMenu.Item value={subData.text}>
                                                        <NavigationMenu.Trigger
                                                            css={subNavBtnStyles}
                                                            className={
                                                                subCategory === subData.text ||
                                                                title === subData.text
                                                                    ? 'current-sub-category desktop-sub-nav-link desktop-sub-nav-btn'
                                                                    : 'desktop-sub-nav-link  desktop-sub-nav-btn'
                                                            }
                                                            onPointerEnter={event => {
                                                                if (event.pointerType === 'mouse') {
                                                                    clearTimeout(delayClose);
                                                                }
                                                            }}
                                                            onPointerLeave={event => {
                                                                if (event.pointerType === 'mouse') {
                                                                    delayClose = setTimeout(
                                                                        () => setSubValue(''),
                                                                        200
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            {subData.text}
                                                        </NavigationMenu.Trigger>
                                                        <Content
                                                            css={
                                                                isLastSubItem
                                                                    ? lastSubContentStyles
                                                                    : subContentStyles
                                                            }
                                                            onPointerEnter={event => {
                                                                if (event.pointerType === 'mouse') {
                                                                    clearTimeout(delayClose);
                                                                }
                                                            }}
                                                            onPointerLeave={event => {
                                                                if (event.pointerType === 'mouse') {
                                                                    delayClose = setTimeout(
                                                                        () => setSubValue(''),
                                                                        200
                                                                    );
                                                                }
                                                            }}
                                                            onFocusOutside={() =>
                                                                (delayClose = setTimeout(
                                                                    () => setSubValue(''),
                                                                    200
                                                                ))
                                                            }
                                                        >
                                                            <ul>
                                                                {subData.links?.map(
                                                                    (subData1, i) => (
                                                                        <NavigationMenu.Item
                                                                            key={i}
                                                                        >
                                                                            <NavigationMenu.Link
                                                                                asChild
                                                                                active={
                                                                                    subData1.text.toLowerCase() ===
                                                                                    title.toLowerCase()
                                                                                }
                                                                            >
                                                                                <CLink
                                                                                    to={
                                                                                        subData1.link
                                                                                    }
                                                                                    css={
                                                                                        subNavLinkStyles
                                                                                    }
                                                                                    className="desktop-sub-nav-link"
                                                                                >
                                                                                    {subData1.text}
                                                                                </CLink>
                                                                            </NavigationMenu.Link>
                                                                        </NavigationMenu.Item>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </Content>
                                                    </NavigationMenu.Item>
                                                </MenuList>
                                            </NavigationMenu.Sub>
                                        ) : (
                                            <NavigationMenu.Item key={i}>
                                                <NavigationMenu.Link
                                                    asChild
                                                    active={subData.text === title}
                                                >
                                                    <CLink
                                                        to={subData.link}
                                                        css={subNavLinkStyles}
                                                        className="desktop-sub-nav-link"
                                                    >
                                                        {subData.text}
                                                    </CLink>
                                                </NavigationMenu.Link>
                                            </NavigationMenu.Item>
                                        );
                                    })}
                                </ul>
                            </Content>
                        </NavigationMenu.Item>
                    ) : (
                        <NavigationMenu.Item key={i}>
                            <NavigationMenu.Link asChild active={data.text === title}>
                                <CLink to={data.link} css={navLinkStyles}>
                                    {data.text}
                                </CLink>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    )
                )}
                {children}
            </MenuList>
        </NavigationMenu.Root>
    );
};

export const NavItem = ({ children, ...props }: { children: ReactNode; id?: string }) => (
    <NavigationMenu.Item {...props}>
        <NavigationMenu.Link asChild>{children}</NavigationMenu.Link>
    </NavigationMenu.Item>
);
