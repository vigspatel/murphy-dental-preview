import { flexCenter, px } from '@/layout/styles/classes';
import border from '@a/images/our-team/left-image-border.svg';
import line from '@a/images/our-team/line-desktop.png';
import lineMob from '@a/images/our-team/line-mob.png';
import borderRight from '@a/images/our-team/right-image-border.svg';
import styled from '@emotion/styled';
import { h3 } from './layout/styles/Typography';

export const ImageBox = styled.article<{ right?: boolean }>`
    ${px};
    padding-bottom: 48px;
    margin-bottom: 48px;
    position: relative;

    ::after {
        content: url(${lineMob});
        position: absolute;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%);
        filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(3443%)
            hue-rotate(171deg) brightness(94%) contrast(90%);
    }

    > div {
        :first-of-type {
            padding: 25px;
            position: relative;
            border-radius: 50%;
            max-width: 350px;
            margin: 0 auto;
            flex-shrink: 0;

            ::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: ${({ right }) =>
                    right ? `url(${borderRight})` : `url(${border})`};
                background-size: contain;
                background-repeat: no-repeat;
            }

            > .gatsby-image-wrapper {
                border-radius: 50%;
                opacity: 0.9999; //safari border radius bug fix
            }
        }

        :last-of-type {
            margin-top: 32px;
            max-width: 630px;

            > p:first-of-type {
                ${h3};
                color: ${({ theme }) => theme.colors.black};
                margin: 0;
                font-weight: 500;
            }

            > h2 {
                margin: 8px 0 16px;
                text-transform: capitalize;
                color: ${({ theme }) => theme.colors.primary};
            }

            > p {
                margin: 0;
            }
        }
    }

    @media (min-width: 768px) {
        ${flexCenter};

        > div {
            :first-of-type {
                margin: 0;
            }

            :last-of-type {
                max-width: 840px;
                margin-left: ${({ theme, right }) => (right ? 0 : theme.spacing.lg)};
                margin-right: ${({ theme, right }) => (right ? theme.spacing.lg : 0)};
                margin-top: 0;
                order: ${({ right }) => (right ? -1 : 'unset')};

                > h2 {
                    margin-bottom: 24px;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        padding-bottom: 80px;
        margin-bottom: 80px;

        ::after {
            content: url(${line});
            bottom: -7px;
        }
    }

    @media (min-width: 1600px) {
        > div:last-of-type {
            max-width: 940px;
        }
    }
`;
