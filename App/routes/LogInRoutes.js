import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginIndexScreen from '../screens/LoginIndexScreen';
import ForgotPasswordRoute from './ForgotPasswordRoute';
const Stack = createStackNavigator();

function SignUpRoute() {
  return (
    <Stack.Navigator 
    screenOptions={
      {
        headerShown:false
      }
    }>
      <Stack.Screen name="Home" component={LoginIndexScreen} />
      <Stack.Screen name='Forgot' component={ForgotPasswordRoute}/>
    </Stack.Navigator>
  );
}
export default SignUpRoute