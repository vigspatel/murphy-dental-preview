import { flexCenter } from '@/layout/styles/classes';
import styled from '@emotion/styled';

export default styled.button<{ to?: string }>`
    ${flexCenter};
    display: inline-flex;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    font-weight: 500;
    font-family: 'Nunito', sans-serif;
`;
