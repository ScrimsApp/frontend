import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      light: string;
      semiDark: string;
      dark: string;
      text: {
        light: string;
        backup: string;
        dark: string;
        error: string;
        success: string;
      };
      notification: {
        success: string;
        error: string;
        info: string;
      };
    };
    fonts: {
      primary: string;
    };
    misc: {
      borderRadius: string;
    };
  }
}
