import { createStackNavigator } from '@react-navigation/stack';
import SignUpIndexScreen from '../screens/SignUpIndexScreen';
import React from 'react'
import Verification from '../screens/sign-up/Verification';
import Pin from '../screens/sign-up/Pin';
import Welcome from '../screens/sign-up/Welcome';
const Stack = createStackNavigator();

function SignUpRoute() {
  return (
    <Stack.Navigator 
    screenOptions={
      {
        headerShown:false
      }
    }>
      <Stack.Screen name="Home" component={SignUpIndexScreen} />
      <Stack.Screen name='Verify' component={Verification}/>
      <Stack.Screen name='Pin' component={Pin}/>
      <Stack.Screen name='Welcome' component={Welcome}/>
    </Stack.Navigator>
  );
}
export default SignUpRoute