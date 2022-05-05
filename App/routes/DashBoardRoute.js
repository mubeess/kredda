import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import DashboardIndex from '../screens/DashboardIndex';
const Stack = createStackNavigator();

function DashBoardRoute() {
  return (
    <Stack.Navigator 
    screenOptions={
      {
        headerShown:false
      }
    }>
      <Stack.Screen name="Home" component={DashboardIndex} />
    </Stack.Navigator>
  );
}
export default DashBoardRoute