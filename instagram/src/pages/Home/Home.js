import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../Header/Header';
import Stories from '../../components/Stories/Stories';
import Feed from '../../components/Feed/Feed';


// import { Container } from './styles';

const Home = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header pendency={0}/>
        <ScrollView style={{flex:1}}>
          <Stories letters={'theusbreus'}/>
          <Feed />
        </ScrollView>
      </View>
    </>
  )
}

export default Home;