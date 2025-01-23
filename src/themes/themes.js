import { DefaultTheme, DarkTheme } from 'react-native-paper';


export const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    background: '#ffffff',
    text: '#000000',
    surface: '#f5f5f5',
    placeholder: '#888888',
  },
};

export const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212',
    text: '#ffffff',
    surface: '#1f1f1f',
    placeholder: '#aaa',
  },
};
