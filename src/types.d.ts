interface Page<C = unknown, Q = unknown> extends React.FC<import('gatsby').PageProps<C, Q>> {
    Layout?: React.FC<{ children: React.ReactNode }> | false;
}

declare module '*.svg' {
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.json' {
    const content: string;
    export default content;
}
