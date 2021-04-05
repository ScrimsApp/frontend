import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  title: 'main',
  colors: {
    primary: '#9161FF',
    secondary: '#4767F9',
    tertiary: '#FE54A1',
    light: '#E1E1E1',
    semiDark: '#192039',
    dark: '#101424',
    text: {
      light: '#FFFFFF',
      backup: '#3C4045',
      dark: '#101424',
      error: '#EE4E4E',
      success: '#5AE868',
    },
    notification: {
      success: '#5ACA73',
      error: '#C54545',
      info: '#353A4F',
    },
  },
  fonts: {
    primary: 'Source Sans Pro',
  },
  misc: {
    borderRadius: '12px',
  },
};

export default theme;
