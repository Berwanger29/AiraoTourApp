import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';



import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';

import Greetings from './src/pages/Greetings';
import Home from './src/pages/Home';

export default function App() {

  let [fontsLoaded, error] = useFonts({
    'impact': require('./assets/fonts/impact.ttf'),
    'regular': require('./assets/fonts/Lato-Regular.ttf'),
    'light': require('./assets/fonts/Lato-Light.ttf')
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}
