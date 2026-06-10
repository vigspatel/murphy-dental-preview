import { css } from '@emotion/react';

const font = css`
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
`;

export const h1 = css`
    ${font};
    font-size: 1.75rem;
    line-height: 171%;

    @media (min-width: 1024px) {
        font-size: 2.625rem;
        line-height: 143%;
    }

    @media (min-width: 1600px) {
        font-size: 3.5rem;
    }
`;

export const h2 = css`
    ${font};
    font-size: 1.5rem;
    line-height: 148%;

    @media (min-width: 1024px) {
        font-size: 2rem;
        line-height: 137.5%;
    }

    @media (min-width: 1600px) {
        font-size: 2.5rem;
    }
`;

export const h3 = css`
    ${font};
    font-size: 1.25rem;
    line-height: 150%;
    font-weight: 600;

    @media (min-width: 1024px) {
        font-size: 1.625rem;
        line-height: 140%;
    }

    @media (min-width: 1600px) {
        font-size: 2rem;
    }
`;

export const h4 = css`
    ${font};
    font-size: 1rem;
    line-height: 140%;
    font-weight: 600;

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
        font-size: 1.5rem;
    }
`;

export const smTxt = css`
    font-size: 0.875rem;

    @media (min-width: 1024px) {
        font-size: 1rem;
    }

    @media (min-width: 1600px) {
        font-size: 1.125rem;
    }
`;

export const lgTxt = css`
    font-size: 1.125rem;

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
        font-size: 1.375rem;
    }
`;
