import { createStackNavigator } from '@react-navigation/stack';
import SignUpIndexScreen from '../screens/SignUpIndexScreen';
import React from 'react'
import Verification from '../screens/sign-up/Verification';
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
    </Stack.Navigator>
  );
}
export default SignUpRoute