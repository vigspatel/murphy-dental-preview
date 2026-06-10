import { px, py } from '@/layout/styles/classes';
import { lgTxt } from '@/layout/styles/Typography';
import bg from '@a/images/common-hero-bg.jpg';
import styled from '@emotion/styled';

export const CommonHero = styled.section`
    ${px};
    ${py};
    background-image: url(${bg});
    padding-top: 115px;
    background-size: cover;

    h1 {
        color: ${({ theme }) => theme.colors.primary};
        margin: 0 0 24px;
        text-transform: capitalize;
    }

    > h1 {
        text-align: center;
    }

    p {
        ${lgTxt};
        margin: 0;
    }

    > p {
        text-align: center;
    }

    @media (min-width: 1024px) {
        padding-top: 205px;

        h1 {
            margin-bottom: 48px;
        }

        > p {
            width: 60vw;
            max-width: 1024px;
            margin: 0 auto;
        }
    }

    @media (min-width: 1280px) {
        padding-top: 237px;
    }
`;
