import arrow from '@a/icons/right-arrow.svg';
import styled from '@emotion/styled';
import PlainBtn from './PlainBtn';

export default styled(PlainBtn)`
    padding: 8px 24px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 32px;
    transition: box-shadow 0.3s ease-in-out;

    ::after {
        content: '';
        margin-left: 10px;
        width: 15px;
        height: 12.35px;
        background-image: url(${arrow});
        background-size: contain;
        flex-shrink: 0;
        filter: brightness(0) invert(1);
    }

    :hover {
        box-shadow: 0px 4px 32px rgba(51, 226, 184, 0.35);

        ::after {
            animation: translateBtnArrow 0.7s ease-out infinite;
        }
    }

    :focus-visible {
        box-shadow: 0px 4px 32px rgba(51, 226, 184, 0.35);

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
        padding: 16px 32px;

        ::after {
            width: 17px;
            height: 14px;
        }
    }
`;
