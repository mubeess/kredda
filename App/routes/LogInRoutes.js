import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginIndexScreen from '../screens/LoginIndexScreen';
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
    </Stack.Navigator>
  );
}
export default SignUpRoute