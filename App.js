
import { StatusBar, ActivityIndicator } from 'react-native';




import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';

import Greetings from './src/pages/Greetings';
import Home from './src/pages/Home';
import MainStack from './src/navigation/MainStack';
import List from './src/pages/List';
import DrawerNav from './src/navigation/DrawerNav';

export default function App() {

  let [fontsLoaded, error] = useFonts({
    'impact': require('./assets/fonts/impact.ttf'),
    'regular': require('./assets/fonts/Lato-Regular.ttf'),
    'light': require('./assets/fonts/Lato-Light.ttf')
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }


  console.disableYellowBox = true

  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <DrawerNav />
      </ThemeProvider>
    </>
  );
}
