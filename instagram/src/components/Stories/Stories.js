import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import profile from '../../assets/profile.jpg';

import Icon from 'react-native-vector-icons/AntDesign';


import {
AreaStorie,
AreaUser,
ProfileImage,
ProfileUser,
ProfileColor,
ScrollVierw,
ProfileMeUser,
MyHistory,
AddPlus,

} from './styles';

// import { Container } from './styles';

const Stories = ({letters}) => {
  return (
       <>
        <ScrollVierw style={{borderColor: '#ddd', borderBottomWidth: 1}} horizontal={true} showsHorizontalScrollIndicator={false}>
         <AreaStorie>
            <AreaUser>
                <MyHistory>
                    <ProfileImage source={profile} resizeMode='cover'/>
                    <AddPlus>
                        <Icon name='plus' size={16} color='#fff'/>
                    </AddPlus>
                </MyHistory>
                <ProfileMeUser>Seu story</ProfileMeUser>
            </AreaUser>
             <AreaUser>
                <ProfileColor isBests={true}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={false}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={true}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={true}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={true}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={true}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={false}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={false}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={false}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={true}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
            <AreaUser>
                <ProfileColor isBests={true}>
                    <ProfileImage source={profile} resizeMode='cover'/>
                </ProfileColor>
                <ProfileUser>{letters}</ProfileUser>
            </AreaUser>
         </AreaStorie>
        </ScrollVierw>
       </>
  )
}

export default Stories;