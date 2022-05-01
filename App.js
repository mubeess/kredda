import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider,IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import RNBootSplash from "react-native-bootsplash";
import IndexRoute from './App/routes/Index'
import { default as theme } from './theme.json';
export default function App() {
  return (
  <>
 <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
    <IndexRoute/>
    </NavigationContainer>
  </ApplicationProvider>
</>
  )
}
