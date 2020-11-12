import React,{useState} from 'react';
import {Text} from 'react-native';

import styled from 'styled-components';




const InputArea = styled.View`
width: 100%;
height: 60px;
background-color: rgba(0,0,0,0.03);
flex-direction: row;
border-radius: 8px;
padding-left: 15px;
align-items: center;
margin-bottom: 15px;
border: 1px solid rgba(0,0,0,0.2);

`;

const Input = styled.TextInput`
flex: 1;
margin-right: 20px;
font-size: 16px;
color: #000;

`;


const AreaLogo = styled.TouchableOpacity`


`;


export default ({Icon, name , pass, onChangeUser, onChangePass}) => {
    const [show, SetShow] = useState(false);

    function changeIcon(){
        if(show){
            SetShow(false);
        }else {
            SetShow(true);
        }
    }
    return (
        <>
            <InputArea>
                <Input
                     placeholder='Número de telefone, email ou nome de usuário'
                     onChangeText={onChangeUser}
                     value={name}
                />
            </InputArea>
            <InputArea>
                <Input 
                    secureTextEntry={show ? false : true}
                    placeholder='Senha'
                    onChangeText={onChangePass}
                    value={pass}           
                />
              <AreaLogo onPress={changeIcon}>
                 <Icon style={{marginRight: 10}} name={show ? 'eye' : 'eye-off'} size={25} color='#0094FF'/>
              </AreaLogo>
            </InputArea>
            
        </>
      
       
    )
}