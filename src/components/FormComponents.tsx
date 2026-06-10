import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Form = styled.form`
    padding: 32px 24px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 6px 64px 10px rgba(43, 97, 84, 0.15);
    border-radius: 24px;
    margin: 0 auto;
    position: relative;

    > h3 {
        margin: 0 0 24px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.primary};
    }

    > p {
        margin: 0 0 16px;
    }

    @media (min-width: 768px) {
        padding: 48px;
        box-shadow: 0px 6px 64px 10px rgba(43, 97, 84, 0.2);
        border-radius: 48px;
    }

    @media (min-width: 1280px) {
        > p {
            margin-bottom: 24px;
        }
    }
`;

export const Input = styled.input<{ rows?: string }>`
    margin-bottom: 16px;
    background: ${({ theme }) => theme.colors.lightBg};
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 8px 16px;
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.875rem;
    line-height: 1.35em;
    outline: none;
    transition: border 0.3s ease-in-out;
    resize: none;

    :hover {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    :focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    ::placeholder {
        color: ${({ theme }) => theme.colors.textBlack};
    }

    :focus:invalid {
        border: 1px solid ${({ theme }) => theme.colors.tertiary};
    }

    @media (min-width: 1024px) {
        font-size: 1rem;
        margin-bottom: 24px;
    }
`;

export const Label = styled.label`
    font-weight: 400;
    line-height: 1.35em;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textBlack};
    margin-bottom: 8px;
    display: inline-block;

    @media (min-width: 1024px) {
        font-size: 1rem;
        margin-bottom: 10px;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    > input {
        display: inline-block;
        width: auto;
        margin: 0;
        accent-color: ${({ theme }) => theme.colors.tertiary};
        width: 16px;
        height: 16px;
        transition: box-shadow 0.3s ease-in-out;

        :hover {
            + label {
                color: ${({ theme }) => theme.colors.secondary};
            }
        }

        :focus-visible {
            + label {
                color: ${({ theme }) => theme.colors.secondary};
            }
        }
    }

    > label {
        margin: 0;
        padding-left: 16px;
        color: ${({ theme }) => theme.colors.primary};

        :hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    @media (min-width: 1024px) {
        margin-bottom: 24px;

        > input {
            width: 20px;
            height: 20px;
        }
    }
`;

export const FlexGroup = styled.div<{ bottomMargin?: boolean }>`
    @media (min-width: 600px) {
        display: flex;

        > div {
            :not(:last-of-type) {
                margin-right: 24px;
            }
        }

        ${({ bottomMargin }) =>
            bottomMargin &&
            css`
                > div {
                    margin-bottom: 0;
                }
            `};
    }

    @media (min-width: 1024px) {
        > div:not(:last-of-type) {
            margin-right: 32px;
        }
    }

    @media (min-width: 1280px) {
        > div:not(:last-of-type) {
            margin-right: 48px;
        }
    }
`;

export const Thanks = styled.div<{ submit: boolean; lightBg?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: 32px;
    border-radius: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: ${({ submit }) => (submit ? 10 : -1)};
    opacity: ${({ submit }) => (submit ? 1 : 0)};
    transform: ${({ submit }) => (submit ? 'scale(1)' : 'scale(0)')};
    transition: all 0.3s ease-in;
    transition-property: opacity, transform;
    background-color: ${({ theme }) => theme.colors.white};

    > h1 {
        margin-top: 0;
        color: ${({ theme }) => theme.colors.primary};
    }

    > h3 {
        margin-bottom: 0;
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {
        padding: 48px;
        border-radius: 48px;
    }
`;
