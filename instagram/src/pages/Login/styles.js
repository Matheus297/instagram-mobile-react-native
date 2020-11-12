import styled from 'styled-components';



export const Container = styled.SafeAreaView`
flex: 1;
background-color: #fff;
align-items: center;
`;

export const Logo = styled.Image`
width: 170px;
height: 50px;
margin-top: 180px;

`;


export const LoginArea = styled.View`
width: 100%;
padding: 40px;

`;

export const AreaButton = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
height: 60px;
background-color: #0094FF;
border-radius: 8px;
`;

export const TextButton = styled.Text`
color: #fff;
font-size: 18px;
font-weight: bold;

`;

export const SignupArea = styled.TouchableOpacity`
display: flex;
flex-direction: row;
margin-top: 5px;
`;


export const SignupText = styled.Text`
color: #ABAEB4;

`;

export const MidArea = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 40px;


`;

export const MidLine = styled.View`
flex: 1;
height: 1px;
background-color: #333;
margin-left: 5px;
margin-right: 5px;
`;

export const MidText = styled.Text`
color: #333;
text-transform: uppercase;
font-size: 16px;

`;

export const SignupTextBold = styled.Text`
color: #041840;

`;

export const FacebookArea = styled.TouchableOpacity`
margin-top: 5px;
justify-content: center;
align-items: center;
flex-direction: row;

`;

export const FacebookText = styled.Text`
color: #0094FF;
font-size: 16px;
font-weight: bold;
margin-left: 10px;
`;

export const BottomLine = styled.View`
width: 100%;
height: 1px;
background-color: #ddd;
margin-top: 30px;
`;

export const BottomText = styled.Text`
color: #ABAEB4;
margin-top: 20px;

`;
export const BottomTextBold = styled.Text`
color: #041840;

`;
