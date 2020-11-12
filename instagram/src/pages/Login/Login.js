import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    Logo,
    LoginArea,
    AreaButton,
    TextButton,
    SignupText,
    SignupTextBold,
    SignupArea,
    MidArea,
    MidLine,
    MidText,
    FacebookArea,
    FacebookText,
    BottomLine,
    BottomText,
    BottomTextBold,
} from './styles';


import SignInput from '../../components/SignupInput';
import Icon from 'react-native-vector-icons/Ionicons'
import IconFacebook from 'react-native-vector-icons/MaterialIcons'


// import { Container } from './styles';

const Login = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');


  function goTo(screename){
    navigation.navigate(screename);
  }

  function login(){
    if(name === 'matheus' && pass === '123'){
      goTo('Home')
    }
  }
  return (
   <Container>
      <Logo source={require('../../assets/logo.png')}/>
      <LoginArea>
        <SignInput Icon={Icon} name={name} pass={pass} onChangeUser={t => setName(t)} onChangePass={t => setPass(t)}/>
      <AreaButton onPress={login}>
        <TextButton>Entrar</TextButton>
      </AreaButton>
      </LoginArea>
      <SignupArea>
        <SignupText>Esqueceu seus dados de login? </SignupText>
        <SignupTextBold>Obtenha ajuda para entrar.</SignupTextBold>
      </SignupArea>
      <MidArea>
        <MidLine />
        <MidText>ou</MidText>
        <MidLine />
      </MidArea>
      <FacebookArea onPress={login}>
        <IconFacebook name='facebook' size={30} color='#0094FF'/>
        <FacebookText>Entra com facebook</FacebookText>
      </FacebookArea>
      <BottomLine />
      <BottomText>Não tem uma conta? <BottomTextBold>Cadastre-se.</BottomTextBold></BottomText>
   </Container>
    
  )
}

export default Login;