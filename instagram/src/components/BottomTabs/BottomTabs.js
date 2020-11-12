import React from 'react';
import {Button, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native'


import HomeIcon from 'react-native-vector-icons/Ionicons' // md-home-outline - md-home-sharp
import Search from 'react-native-vector-icons/Ionicons' // search-outline - search
import Gallery from 'react-native-vector-icons/AntDesign' // plussquareo
import Follow from 'react-native-vector-icons/AntDesign' // heart - hearto
import User from 'react-native-vector-icons/AntDesign'

import profile from '../../assets/profile.jpg'


const AreaTab = styled.View`
padding: 10px 0;
width: 100%;
background-color: #fff;
flex-direction: row;


`;

const AreaButton = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;


`;

const ButtonImage = styled.Image`
height: 30px;
width: 30px;
border-radius: 15px;



`;


// import { Container } from './styles';

const BottomTabs = ({state}) => {

    const navigation = useNavigation();


    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }
  return (
     <AreaTab style={{borderTopWidth: 1, borderTopColor: '#ddd'}}>
        <AreaButton activeOpacity={1} onPress={() => goTo('Home')}>
            <HomeIcon name={state.index === 0 ? 'md-home-sharp' : 'md-home-outline' } size={28} color='#000' />
        </AreaButton>
        <AreaButton activeOpacity={1} onPress={() => goTo('Search')}>
            <Search name={state.index === 1 ? 'search' : 'search-outline' } size={28} color='#000' />
        </AreaButton>
        <AreaButton activeOpacity={1} onPress={() => goTo('Gallery')}>
            <Gallery name='plussquareo' size={28} color='#000' />
        </AreaButton>
        <AreaButton activeOpacity={1} onPress={() => goTo('Follow')}>
            <Follow name={state.index === 3 ? 'heart' : 'hearto'} size={28} color='#000' />
        </AreaButton>
        <AreaButton activeOpacity={1} onPress={() => goTo('Profile')}>
            <ButtonImage source={profile} />
        </AreaButton>
     </AreaTab>
  )
}

export default BottomTabs;