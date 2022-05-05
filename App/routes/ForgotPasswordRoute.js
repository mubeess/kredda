import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import ForgotPasswordIndex from '../screens/ForgotPasswordIndex';
import NewPin from '../screens/sign-in/NewPin';
const Stack = createStackNavigator();

function ForgotPasswordRoute() {
  return (
    <Stack.Navigator 
    screenOptions={
      {
        headerShown:false
      }
    }>
      <Stack.Screen name="Home" component={ForgotPasswordIndex} />
      <Stack.Screen name='NewPin' component={NewPin}/>
    </Stack.Navigator>
  );
}
export default ForgotPasswordRoute