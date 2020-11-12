import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

import store from './src/redux/index';



const App = () => {

  return (
    <NavigationContainer>
      <StatusBar transparent backgroundColor='#fff' barStyle='dark-content'/>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  )
}

export default App;