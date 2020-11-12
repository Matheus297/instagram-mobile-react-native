import React, { useState } from 'react';
import {TouchableOpacity, View, Animated} from 'react-native';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Heart from 'react-native-vector-icons/AntDesign';
import Send from 'react-native-vector-icons/Feather';
import Evilcons from 'react-native-vector-icons/EvilIcons';
import Bookmark from 'react-native-vector-icons/Feather';



import photo from '../../assets/profile.jpg';

import {
    WrapperCard,
    HeaderCard,
    BodyCard,
    UserProfile,
    NameProfile,
    BorderColor,
    SwipeDot,
    SwipperItem,
    DateView,
    DateText,
    BottomCard,
    SwipperImage,
    AreaHeart,
    Scroller,
    Left,
    Right,

} from './styles';

const Feed = () => {

    const [likes, setLike] = useState(false);
    const [opacityLiked] = useState(new Animated.Value(0));
    const [scaleLiked] = useState(new Animated.Value(0.1));
    const [scaleLikedBottom] = useState(new Animated.Value(1))

    const [images, setImages] = useState([
        {   
            id: 1,
            img: "https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem-1200x675.jpg"  
        },
        {   
            id: 2,
            img: "data:image/jpeg;base64,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"  
        },
        {   
            id: 3,
            img: "https://catracalivre.com.br/wp-content/uploads/2019/09/the-nature-conservancy-paisagem3-1.jpg"  
        }
    ]);

    const LikedPost = () => {
        if(likes){
            setLike(false);
        } else {
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(opacityLiked,
                        {
                            toValue: 1,
                            duration: 1000,
                            useNativeDriver: true,
                         }),
                    
                    Animated.timing(scaleLikedBottom, 
                            {
                                toValue: 1.1,
                                duration: 800,
                                useNativeDriver: true
                            }
                        ),
    
                    Animated.timing(scaleLiked, 
                            {
                                toValue: 1,
                                duration: 1000,
                                useNativeDriver: true
                            }
                        ),
                ]),
                Animated.parallel([
                    Animated.timing(scaleLiked,
                        {
                            toValue: 1,
                            duration: 1000,
                            useNativeDriver: true,
                         }),

                    Animated.timing(scaleLikedBottom, 
                            {
                                toValue: 1.1,
                                duration: 800,
                                useNativeDriver: true
                            }
                        ),
                        Animated.timing(scaleLikedBottom, 
                            {
                                toValue: 1,
                                duration: 800,
                                useNativeDriver: true
                            }
                        ),
    
                    Animated.timing(scaleLiked, 
                            {
                                toValue: 0,
                                duration: 800,
                                useNativeDriver: true
                            }
                        ),
                ]),
            ]).start()
            setLike(true);
        }
    }

  return (
      <>
        {likes ? (
           <>
            <WrapperCard> 
            <HeaderCard>
               <Left>
                    <BorderColor>
                        <UserProfile source={photo}/>          
                    </BorderColor>
                    <NameProfile>theusbreus</NameProfile>
               </Left>
               <Right>
                    <Icon name='dots-vertical' size={23} color='#000'/>
               </Right>
            </HeaderCard>
            <BodyCard>
                <Scroller>
              
                    <Swiper
                        style={{height: 400,}}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDot isActive />}
                        paginationStyle={{top: 380, right: 170, bottom: null, left: null}}
    
                    >
                        
                        {images.map(item => (
                        
                                <SwipperItem key={item.id}>
                                    <SwipperImage source={{uri: item.img}}/>
                                    <Animated.View style={{
                                        position: 'absolute',
                                        bottom: 150,
                                        right: 150,
                                        opacity: opacityLiked,
                                        transform: [{scale: scaleLiked}]
                                    }}>
                                         <Heart name={likes ? 'heart' : 'heart'} size={120} color={likes ? 'rgba(255,255,255,1)' : null}/>
                                    </Animated.View>
                                </SwipperItem>
                            
                        ))}
                    </Swiper>
                    <BottomCard>
                        <Left>
                            <TouchableOpacity onPress={LikedPost}>
                            <Animated.View style={{transform: [{scale: scaleLikedBottom}]}}>
                                <Heart name={likes ? 'heart' : 'hearto'} size={28} color={likes ? 'red' : '#000'}/>
                            </Animated.View>
                            </TouchableOpacity>
                            <Evilcons style={{marginLeft: 4}} name='comment' size={38} color='#000'/>
                            <Send style={{marginLeft: 5}} name='send' size={28} color='#000'/>
                        </Left>
                        <Right>
                            <Send name='bookmark' size={28} color='#000'/>
                        </Right>
                    </BottomCard>   
                    <DateView>
                      <DateText>há 8 horas</DateText>
                    </DateView>             
                </Scroller>
            </BodyCard>
        </WrapperCard>
           </>
        
        ): (
            <>

   
        <WrapperCard> 
            <HeaderCard>
               <Left>
                    <BorderColor>
                        <UserProfile source={photo}/>          
                    </BorderColor>
                    <NameProfile>theusbreus</NameProfile>
               </Left>
               <Right>
                    <Icon name='dots-vertical' size={23} color='#000'/>
               </Right>
            </HeaderCard>
            <BodyCard>
                <Scroller>
              
                    <Swiper
                        style={{height: 400,}}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDot isActive />}
                        paginationStyle={{top: 380, right: 170, bottom: null, left: null}}
    
                    >
                        
                        {images.map(item => (
                        
                                <SwipperItem key={item.id}>
                                    <SwipperImage source={{uri: item.img}}/>
                                    <Animated.View style={{
                                        position: 'absolute',
                                        bottom: 150,
                                        right: 150,
                                        opacity: opacityLiked,
                                        transform: [{scale: scaleLiked}]
                                    }}>
                                         <Heart name={likes ? 'heart' : 'heart'} size={120} color={likes ? 'rgba(255,255,255,1)' : null}/>
                                    </Animated.View>
                                </SwipperItem>
                            
                        ))}
                    </Swiper>
                    <BottomCard>
                        <Left>
                            <TouchableOpacity onPress={LikedPost}>
                            <Animated.View style={{transform: [{scale: scaleLikedBottom}]}}>
                                <Heart name={likes ? 'heart' : 'hearto'} size={28} color={likes ? 'red' : '#000'}/>
                            </Animated.View>
                            </TouchableOpacity>
                            <Evilcons style={{marginLeft: 4}} name='comment' size={38} color='#000'/>
                            <Send style={{marginLeft: 5}} name='send' size={28} color='#000'/>
                        </Left>
                        <Right>
                            <Send name='bookmark' size={28} color='#000'/>
                        </Right>
                    </BottomCard>   
                    <DateView>
                      <DateText>há 8 horas</DateText>
                    </DateView>             
                </Scroller>
            </BodyCard>
        </WrapperCard>
      

            </>
        )}

    
    
      </>
    
  )
}

export default Feed;