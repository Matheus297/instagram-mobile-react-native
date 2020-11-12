import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Gallery from '../pages/Gallery/Gallery';
import Follow from '../pages/Follow/Follow';
import Profile from '../pages/Profile/Profile';
import MyTabs from '../components/BottomTabs/BottomTabs';

const Tab = createBottomTabNavigator();


export default () => (
    <Tab.Navigator 
        tabBar={props => <MyTabs {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Follow" component={Follow} />
        <Tab.Screen name="Profile" component={Profile} />
   </Tab.Navigator>
)
