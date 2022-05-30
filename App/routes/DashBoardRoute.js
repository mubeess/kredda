import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import DashboardIndex from '../screens/DashboardIndex';
import MainAppIndex from './main-app/MainAppIndex';
const Stack = createStackNavigator();

function DashBoardRoute() {
  return (
    <Stack.Navigator 
    screenOptions={
      {
        headerShown:false
      }
    }>
      <Stack.Screen name="Home" component={MainAppIndex} />
    </Stack.Navigator>
  );
}
export default DashBoardRoute