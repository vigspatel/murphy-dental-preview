import '@emotion/react';
declare module '@emotion/react' {
    export interface Theme {
        colors: {
            white: string;
            primary: string;
            secondary: string;
            tertiary: string;
            black: string;
            bg: string;
            lightBg: string;
            textBlack: string;
            gray: string;
        };
        spacing: {
            lg: string;
        };
    }
}
