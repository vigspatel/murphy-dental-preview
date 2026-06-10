import { px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';

export const Article = styled.article`
    ${px};
    ${py};
    background-color: ${({ theme }) => theme.colors.bg};

    > div {
        max-width: 1440px;
        margin: 0 auto;

        > h2 {
            margin-top: 0;
            margin-bottom: 24px;
        }

        a {
            color: ${({ theme }) => theme.colors.primary};
            transition: color 0.3s ease-in-out;

            :hover,
            :focus {
                color: ${({ theme }) => theme.colors.secondary};
            }
        }

        > p {
            :first-of-type {
                margin-top: 0;
            }

            :last-of-type {
                margin: 0;
            }

            & + h2 {
                margin-top: 24px;
            }
        }

        > .service-image {
            max-width: 850px;
            margin: 48px auto;
            display: block;
            box-shadow: 0 6px 64px 10px rgba(43, 97, 84, 0.2);
            border-radius: 48px;

            @media (max-width: 1024px) {
                margin: 24px auto;
                border-radius: 24px;
            }
        }
    }
`;
