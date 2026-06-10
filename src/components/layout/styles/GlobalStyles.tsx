import { css, Global, Theme } from '@emotion/react';
import '@fontsource/nunito';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import emotionNormalize from 'emotion-normalize';
import { h1, h2, h3, h4 } from './Typography';

export const theme: Theme = {
    colors: {
        white: '#ffffff',
        primary: '#0C446C',
        secondary: '#427CBE',
        tertiary: '#2A8CB4',
        black: '#292929',
        bg: '#EEF2F4',
        lightBg: '#F4F7F9',
        textBlack: '#636363',
        gray: '#EEEEEE',
    },
    spacing: {
        lg: '5vw', //96px at 1920px
    },
};

export const GlobalStyles = () => {
    return (
        <Global
            styles={theme => css`
                ${emotionNormalize};

                html {
                    font-size: 100%;
                    overflow-x: hidden;
                    scroll-behavior: smooth;
                }
                body {
                    color: ${theme.colors.black};
                    font-family: 'Nunito', sans-serif;
                    font-weight: normal;
                    font-size: 1rem;
                    line-height: 137.5%;
                    word-wrap: break-word;
                    font-kerning: normal;
                    word-wrap: break-word;
                    -webkit-font-smoothing: antialiased;
                }

                h1 {
                    ${h1};
                    color: ${theme.colors.primary};
                }

                h2 {
                    ${h2};
                }

                h3 {
                    ${h3};
                }

                h4 {
                    ${h4};
                }

                a {
                    text-decoration: none;
                    color: ${theme.colors.black};
                    outline: none;
                    background-color: transparent;
                    -webkit-text-decoration-skip: objects;
                }

                *,
                *:before,
                *:after {
                    box-sizing: border-box;
                }

                img {
                    max-width: 100%;
                    display: block;
                    margin: 0;
                    padding: 0;
                }

                ul,
                ol {
                    padding-inline-start: 24px;
                }

                @media (min-width: 1024px) {
                    body {
                        font-size: 1.125rem;
                    }
                }

                @media (min-width: 1280px) {
                    body {
                        font-size: 1.25rem;
                    }
                }
            `}
        />
    );
};
