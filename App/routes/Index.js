import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpRoute from './SignUpRoutes';
import LogInRoutes from './LogInRoutes'
import DashBoardRoute from './DashBoardRoute'
import React from 'react'
import ForgotPasswordRoute from './ForgotPasswordRoute';
import Profile from '../screens/Profile';
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
     <Stack.Screen name='Profile' component={Profile}/>
     <Stack.Screen name='Dash' component={DashBoardRoute}/>
    </Stack.Navigator>
  );
}
export default Index