import styled from 'styled-components';



export const HeaderContainer = styled.View`
display: flex;
flex-direction: row;
height: 60px;
justify-content: space-between;
background-color: #fff;
align-items: center;
padding: 0 10px;
`;

export const Logo = styled.Image`
width: 100px;
height: 30px;


`;

export const SendArea = styled.View``;

export const Pendency = styled.View`
position: absolute;
top: -8;
right: -3;
height: 18px;
width: 18px;
background-color: red;
border-radius: 9px;
display: flex;
align-items: center;
`;


export const PendencyText = styled.Text`
color: #fff;
font-weight: bold;

`;