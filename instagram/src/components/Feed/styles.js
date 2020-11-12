import styled, { keyframes } from 'styled-components';




export const WrapperCard = styled.View`
display: flex;
flex-direction: column;
`;

export const HeaderCard = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 50px;
background-color: #fff;
padding: 0 10px;
`;

export const BorderColor = styled.View`
align-items: center;
justify-content: center;
height: 36px;
width: 36px;
border-radius: 18px;
background-color: #fff;
border: 2px solid #F81F1F;

`;

export const UserProfile = styled.Image`
height: 28px;
width: 28px;
border-radius: 14px;
`;

export const NameProfile = styled.Text`
font-weight: bold;
text-transform: lowercase;
margin-left: 5px;
font-size: 15px;
`;

export const Left = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const Right = styled.View``;


export const BodyCard = styled.View`

`;

export const Scroller = styled.ScrollView`
flex: 1;

`;

export const PhotoFeed = styled.Image`
width: 100%;
height: 400px;
`;


export const SwipeDot = styled.View`
width: ${props => props.isActive ? '8px' : '6px'};
height: ${props => props.isActive ? '8px' : '6px'};
background-color: ${props => props.isActive ? '#418DFF' : '#fff'};
border-radius: 5px;
margin: 3px;

`;


export const SwipperItem = styled.View`
flex: 1;
background-color: #fff;

`;

export const SwipperImage = styled.Image`
width: 100%;
height: 100%;

`;

export const BottomCard = styled.View`
display: flex;
width: 100%;
background-color: #fff;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px 10px;
`;



export const AreaHeart = styled.View`
position: absolute;
bottom: 150;
right: 150;
`;



export const DateView = styled.View`
margin-top: 10px;
padding: 0 10px;
width: 100%;
`;

export const DateText = styled.Text`
color: rgba(0,0,0,0.3);]
font-size: 13px;
`;