import { createStackNavigator } from '@react-navigation/stack';
import SignUpIndexScreen from '../screens/SignUpIndexScreen';
import React from 'react'
const Stack = createStackNavigator();

function SignUpRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SignUpIndexScreen} />
    </Stack.Navigator>
  );
}
export default SignUpRoute