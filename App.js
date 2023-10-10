import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, extendTheme } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      400: '#774CBD',
      500: '#643ca3',
      600: '#523286',
    },
    cyan: {
      500: "#429E79"
    }
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}