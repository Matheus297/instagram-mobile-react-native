import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import Home from '../pages/Home/Home';
import Preload from '../pages/Preload/Preload';
import Login from '../pages/Login/Login';
import MainTab from   '../stacks/BottomTabs';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName='MainTab'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Preload'
                component={Preload}
            />
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='MainTab'
                component={MainTab}
            />
        </Stack.Navigator>
    )
}