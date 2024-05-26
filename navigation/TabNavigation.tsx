import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Student from '../screens/Student';
import Teacher from '../screens/Teacher';
import MyDrawer from './MyDrawer';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='student' component={MyDrawer} options={{ headerShown: false }} />
            <Tab.Screen name='teacher' component={Teacher} />
        </Tab.Navigator>
    )
}

export default TabNavigation