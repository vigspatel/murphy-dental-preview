import styled from '@emotion/styled';
import PlainBtn from './PlainBtn';

export default styled(PlainBtn)`
    padding: 8px 24px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 32px;
    transition: box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
    position: relative;
    z-index: 1;
    overflow: hidden;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #aec1bd;
        border-radius: 32px;
        z-index: -1;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    }

    :hover {
        box-shadow: 0px 2px 32px rgba(51, 226, 184, 0.35);
        color: ${({ theme }) => theme.colors.primary};

        ::before {
            transform: translateX(0);
        }
    }

    :focus-visible {
        box-shadow: 0px 2px 32px rgba(51, 226, 184, 0.35);
        color: ${({ theme }) => theme.colors.primary};

        ::before {
            transform: translateX(0);
        }
    }

    @media (min-width: 1024px) {
        padding: 16px 32px;
    }
`;
