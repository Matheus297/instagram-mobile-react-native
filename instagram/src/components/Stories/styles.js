import styled from 'styled-components';


export const AreaStorie = styled.View`
width: 100%;
display: flex;
flex-direction: row;
background-color: #fff;
padding-bottom: 10px;
padding-left: 10px;

`;

export const AreaUser = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 10px;
margin-left: 10px;
`;

export const ProfileColor = styled.View`
display: flex;
align-items: center;
justify-content: center;
height: 65px;
width: 65px;
border-radius: 32px;
background-color: #fff;
border: 2px solid ${props => props.isBests ? '#1CF624' : '#F81F1F'};

`;

export const ProfileImage = styled.Image`
height: 55px;
width: 55px;
border-radius: 27px;
`;

export const ProfileUser = styled.Text`

`;

export const ProfileMeUser = styled.Text`
margin-top: 5px;
`;



export const ScrollVierw = styled.ScrollView`
width: 100%;
`;

export const MyHistory = styled.View`

`;

export const AddPlus = styled.View`
position: absolute;
bottom: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: #418DFF;
height: 20px;
width: 20px;
border-radius: 10px;
border: 1px solid #fff;

`;