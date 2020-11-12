import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import instagram from '../../assets/lottie/instagram.json';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styled from 'styled-components';




import * as Auth from '../../redux/actions/Auth';
import { set } from 'react-native-reanimated';

// import { Container } from './styles';



const SafeArea = styled.SafeAreaView`
display: flex;
flex: 1;
justify-content: center;
align-items: center;

`;


const Preload = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const status = useSelector(state => state.auth.status);


  useEffect(() => {
    verifyStatus();
  }, [status]);



 


 const verifyStatus = async() => {

  // const token = await AsyncStorage.getItem('token');


  // if(token){
    
  // }else {
  //   setInterval(() => {
  //     navigation.navigate('Login');
  //   }, 3000)
  // }
   
    // switch(status){
    //   case 1: 
    //     return navigation.reset({
    //       routes: [{name: 'Home'}]
    //     })
    //     case 2: 
    //     return navigation.reset({
    //       routes: [{name: 'Login'}]
    //     })  
    //   default:
    //     return status;
    // }
 }
  return (
   <SafeArea>
    <Lottie source={instagram} autoPlay resizeMode='contain' autoSize/>
   </SafeArea>
  )
}

export default Preload;