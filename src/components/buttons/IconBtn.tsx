import styled from '@emotion/styled';
import PlainBtn from './PlainBtn';

export default styled(PlainBtn)`
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

    :hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0px 4px 32px rgba(51, 226, 184, 0.35);
    }

    :focus-visible {
        background-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0px 4px 32px rgba(51, 226, 184, 0.35);
    }

    @media (min-width: 1024px) {
        width: 48px;
        height: 48px;
    }
`;
