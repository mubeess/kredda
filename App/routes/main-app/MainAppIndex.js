import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashboardIndex from '../../screens/DashboardIndex';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../Colors';

const Tab = createMaterialBottomTabNavigator();

export default function MainAppIndex() {
  return (
    <Tab.Navigator
    labeled={true}
    shifting={false}
    activeColor={Colors.primary}
    barStyle={{
        backgroundColor:'#ffffff'
    }}
    >
      <Tab.Screen
       name="Main-App" 
       component={DashboardIndex} 
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
       />

      <Tab.Screen
       name="Savings"
       component={DashboardIndex}
       options={{
        tabBarLabel: 'Savings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cash-multiple" color={color} size={26} />
        ),
      }}
       />

<Tab.Screen
       name="Wallet"
       component={DashboardIndex}
       options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="wallet" color={color} size={26} />
        ),
      }}
       />

<Tab.Screen
       name="Transactions"
       component={DashboardIndex}
       options={{
        tabBarLabel: 'Transactions',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="crosshairs" color={color} size={26} />
        ),
      }}
       />

<Tab.Screen
       name="Profile"
       component={DashboardIndex}
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-tie" color={color} size={26} />
        ),
      }}
       />
    </Tab.Navigator>
  );
}
