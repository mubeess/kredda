import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpRoute from './SignUpRoutes';
import LogInRoutes from './LogInRoutes'
import React from 'react'
const Stack = createStackNavigator();

function Index() {
  return (
    <Stack.Navigator 
    screenOptions={
      {
        headerShown:false
      }
    }>
     <Stack.Screen name="OnBoard" component={OnboardingScreen} />
     <Stack.Screen name="SignUp" component={SignUpRoute} />
     <Stack.Screen name='LogIn' component={LogInRoutes} />
    </Stack.Navigator>
  );
}
export default Index