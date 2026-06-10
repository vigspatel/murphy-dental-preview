import styled from '@emotion/styled';
import { Fragment, ReactNode, useState } from 'react';
import { PlainBtn } from './buttons';
import { theme } from './layout/styles/GlobalStyles';
import { lgTxt } from './layout/styles/Typography';

const Player = styled(PlainBtn)<{ isLoading: boolean }>`
    border-radius: 24px;
    overflow: hidden;
    opacity: 0.9999; //safari border radius bug fix
    display: grid;
    position: relative;

    > * {
        grid-area: 1/1;
    }

    :hover,
    :focus {
        > svg > path {
            :first-of-type {
                fill: ${({ theme }) => theme.colors.primary};
                stroke: ${({ theme }) => theme.colors.primary};
            }

            :last-of-type {
                fill: ${({ theme }) => theme.colors.secondary};
                stroke: ${({ theme }) => theme.colors.secondary};
            }
        }
    }

    > svg {
        width: 13%;
        z-index: 2;
        place-self: center;
        opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
        visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};

        > path {
            transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
        }
    }

    > .gatsby-image-wrapper {
        z-index: 1;
        transition: opacity 0.3s ease-in-out;
        opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};

        ::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }

    > p {
        ${lgTxt};
        place-self: center;
        font-weight: 600;
        z-index: 1;

        & + * {
            z-index: 2;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
`;

export const Video = ({
    children,
    className,
    image,
}: {
    children: ReactNode;
    image: ReactNode;
    className?: string;
}) => {
    const [load, setLoad] = useState(false);

    const handleClick = () => setLoad(true);

    return (
        <Player
            isLoading={load}
            aria-label="click play to start playing the video"
            onClick={handleClick}
            className={className}
        >
            {image}
            <svg
                width="130"
                height="130"
                viewBox="0 0 130 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M65.0001 127.5C99.5179 127.5 127.5 99.5178 127.5 65C127.5 30.4822 99.5179 2.5 65.0001 2.5C30.4823 2.5 2.50006 30.4822 2.50006 65C2.50006 99.5178 30.4823 127.5 65.0001 127.5Z"
                    fill={theme.colors.secondary}
                    stroke={theme.colors.secondary}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M52.5001 43.737C52.5001 42.1396 54.2804 41.1869 55.6095 42.0729L87.5039 63.3359C88.6914 64.1276 88.6914 65.8725 87.5039 66.6641L55.6095 87.9271C54.2803 88.8131 52.5001 87.8604 52.5001 86.263V43.737Z"
                    fill={theme.colors.primary}
                />
            </svg>
            {load && (
                <Fragment>
                    <p>Loading video...</p>
                    {children}
                </Fragment>
            )}
        </Player>
    );
};
