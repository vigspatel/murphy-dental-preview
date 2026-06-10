import styled from '@emotion/styled';
import PlainBtn from './PlainBtn';

export default styled(PlainBtn)`
    padding: 8px 24px;
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease-in-out;
    border-radius: 32px;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.secondary};

    :hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    :focus-visible {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    > svg {
        margin-right: 10px;

        > path {
            transition: stroke 0.3s ease-in-out;
        }
    }

    @media (min-width: 1024px) {
        padding: 16px 32px;
    }
`;
