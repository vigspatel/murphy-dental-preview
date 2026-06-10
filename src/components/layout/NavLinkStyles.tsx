import { PlainBtn } from '@/buttons';
import arrow from '@a/icons/right-arrow.svg';
import linkBorder from '@a/images/layout/sub-navlink-border.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from './styles/GlobalStyles';
import { flexSpace } from './styles/classes';

export const navLinkStyles = css`
    text-transform: capitalize;
    color: ${theme.colors.black};
    transition: color 0.3s ease-in-out;
    font-weight: 700;
    font-size: 1.25rem;

    &[aria-current='page'],
    &.nav-link-current-page {
        color: ${theme.colors.tertiary};
    }

    :hover {
        color: ${theme.colors.secondary};
    }

    :focus-visible {
        color: ${theme.colors.secondary};
    }

    &.current-nav-category {
        position: relative;

        ::before {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            width: 64px;
            height: 3px;
            border-radius: 15px;
            background-color: ${theme.colors.primary};
            transform: translateX(-50%);
            transition: background-color 0.3s ease-in-out;
        }

        :hover {
            ::before {
                background-color: ${theme.colors.secondary};
            }
        }

        :focus-visible ::before {
            background-color: ${theme.colors.secondary};
        }
    }

    @media (min-width: 1280px) {
        font-weight: 600;
    }
`;

export const navBtnStyles = css`
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    ::after {
        content: '';
        height: 7px;
        width: 7px;
        border-right: 2px solid ${theme.colors.black};
        border-bottom: 2px solid ${theme.colors.black};
        transform: rotate(45deg) translateY(-4px);
        margin-left: 12px;
        margin-right: 2px;
        transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
        transform-origin: center;
    }

    :hover {
        ::after {
            border-color: ${theme.colors.secondary};
        }
    }

    :focus-visible {
        ::after {
            border-color: ${theme.colors.secondary};
        }
    }

    &[aria-expanded='true'] {
        ::after {
            transform: rotate(225deg) translateY(-2px);
        }
    }
`;

export const subNavLinkStyles = css`
    ${navLinkStyles};
    ${flexSpace};
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    padding-bottom: 20px;
    text-align: left;
    word-break: break-word;

    ::before {
        content: url(${linkBorder});
        position: absolute;
        bottom: -2px;
        left: 0;
    }

    ::after {
        content: '';
        margin-left: auto;
        width: 24px;
        height: 19.76px;
        background-image: url(${arrow});
        background-size: contain;
        flex-shrink: 0;
        filter: brightness(0) saturate(100%) invert(33%) sepia(61%) saturate(335%)
            hue-rotate(115deg) brightness(86%) contrast(92%);
    }

    @keyframes translateBtnArrow {
        33% {
            transform: translateX(-2px);
        }

        66% {
            transform: translateX(2px);
        }

        100% {
            transform: translateX(0);
        }
    }

    &[data-selected],
    :hover {
        color: ${theme.colors.secondary};

        ::after {
            animation: translateBtnArrow 0.7s ease-out infinite;
        }
    }

    :focus-visible {
        color: ${theme.colors.secondary};

        ::after {
            animation: translateBtnArrow 0.7s ease-out infinite;
        }
    }
`;

export const subNavBtnStyles = css`
    ${subNavLinkStyles};
    width: 100%;
`;

export const NavBtn = styled(PlainBtn)`
    ${navLinkStyles};
    ${navBtnStyles};
`;
