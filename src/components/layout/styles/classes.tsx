import { css } from '@emotion/react';

export const px = css`
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 1024px) {
        padding-left: 48px;
        padding-right: 48px;
    }

    @media (min-width: 1280px) {
        padding-left: 64px;
        padding-right: 64px;
    }
`;

export const npx = css`
    margin-left: -16px;
    margin-right: -16px;

    @media (min-width: 768px) {
        margin-left: -32px;
        margin-right: -32px;
    }

    @media (min-width: 1024px) {
        margin-left: -48px;
        margin-right: -48px;
    }

    @media (min-width: 1280px) {
        margin-left: -64px;
        margin-right: -64px;
    }
`;

export const ml = css`
    margin-left: 16px;

    @media (min-width: 768px) {
        margin-left: 32px;
    }

    @media (min-width: 1024px) {
        margin-left: 48px;
    }

    @media (min-width: 1280px) {
        margin-left: 64px;
    }
`;

export const mr = css`
    margin-right: 16px;

    @media (min-width: 768px) {
        margin-right: 32px;
    }

    @media (min-width: 1024px) {
        margin-right: 48px;
    }

    @media (min-width: 1280px) {
        margin-right: 64px;
    }
`;

export const py = css`
    padding-top: 32px;
    padding-bottom: 32px;

    @media (min-width: 1024px) {
        padding-top: 64px;
        padding-bottom: 64px;
    }

    @media (min-width: 1280px) {
        padding-top: 96px;
        padding-bottom: 96px;
    }
`;

export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flexSpace = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const flexStart = css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
