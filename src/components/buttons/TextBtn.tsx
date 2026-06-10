import arrow from '@a/icons/right-arrow.svg';
import styled from '@emotion/styled';
import PlainBtn from './PlainBtn';

export default styled(PlainBtn)`
    padding-bottom: 4px;
    transition: color 0.3s ease-in-out;
    position: relative;
    color: ${({ theme }) => theme.colors.primary};

    ::before {
        content: '';
        position: absolute;
        left: 0;
        right: 25px;
        bottom: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: height 0.3s ease-in-out;
    }

    ::after {
        content: '';
        margin-left: 8px;
        width: 15px;
        height: 12.35px;
        background-image: url(${arrow});
        background-size: contain;
        flex-shrink: 0;
        filter: brightness(0) saturate(100%) invert(33%) sepia(61%) saturate(335%)
            hue-rotate(115deg) brightness(86%) contrast(92%);
    }

    :hover {
        ::before {
            height: 3px;
        }

        ::after {
            animation: translateBtnArrow 0.7s ease-out infinite;
        }
    }

    :focus-visible {
        ::before {
            height: 3px;
        }

        ::after {
            animation: translateBtnArrow 0.7s ease-out infinite;
        }
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

    @media (min-width: 1024px) {
        ::after {
            width: 17px;
            height: 14px;
        }
    }
`;
