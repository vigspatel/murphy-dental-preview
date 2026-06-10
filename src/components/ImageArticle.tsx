import { flexCenter, px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { h1, h3 } from './layout/styles/Typography';

export const ImageArticle = styled.article<{ right?: boolean }>`
    ${px};
    ${py};
    background-color: ${({ theme }) => theme.colors.bg};

    > .gatsby-image-wrapper {
        border-radius: 50%;
        opacity: 0.9999; //safari border radius bug fix
        box-shadow: 0px 40px 64px rgba(43, 97, 84, 0.3);
        width: 43.73%;
        min-width: 150px;
        margin: 0 auto;
        display: block;
    }

    > div:last-of-type {
        margin-top: 32px;
        max-width: 630px;

        > p:first-of-type {
            ${h3};
            color: ${({ theme }) => theme.colors.black};
            margin: 0;
        }

        > h3 {
            ${h1};
            margin: 8px 0 16px;
            text-transform: capitalize;
            color: ${({ theme }) => theme.colors.primary};
        }

        > p {
            margin: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        > .gatsby-image-wrapper {
            margin-left: 0;
        }
    }

    @media (min-width: 1024px) {
        ${flexCenter};

        > .gatsby-image-wrapper {
            width: 36vw;
            height: 36vw;
            margin: 0;
            flex-shrink: 0;
            max-width: 450px;
            max-height: 450px;
            order: ${({ right }) => (right ? 1 : 'unset')};
        }

        > div:last-of-type {
            max-width: 750px;
            margin-left: ${({ theme, right }) => (right ? 0 : theme.spacing.lg)};
            margin-right: ${({ theme, right }) => (right ? theme.spacing.lg : 0)};
            margin-top: 0;

            > h3 {
                margin-bottom: 24px;
            }
        }
    }

    @media (min-width: 1600px) {
        > .gatsby-image-wrapper {
            max-width: 550px;
            max-height: 550px;
        }
    }
`;
