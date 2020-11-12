import React from 'react';
import {Text, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Send from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../assets/logo.png'


import {
HeaderContainer,
Logo,
SendArea,
Pendency,
PendencyText,



} from './styles';

const Header = ({pendency}) => {
    return (
        <HeaderContainer style={{borderColor: '#ddd', borderBottomWidth: 1}}>
             <Icon name='camera' size={25} color='#000'/>
             <Logo source={logo}/>
             <SendArea>
               {pendency > 0 ? (
                   <>
                      <Send name='send' size={25} color='#000' />
                      <Pendency>
                        <PendencyText>{pendency}</PendencyText>
                      </Pendency>
                   </>
               ): (
                <>
                   <Send name='send' size={25} color='#000' />
                </>
               )}
             </SendArea>
             
        </HeaderContainer>
    )
}

export default Header;