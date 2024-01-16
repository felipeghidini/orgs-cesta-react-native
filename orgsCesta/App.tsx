/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import Cesta from './android/src/telas/Cesta';
import mock from './android/src/mocks/cesta';


function App() {
  return (
    <View>
      <StatusBar />
      <Cesta {...mock} />
    </View>
  );
}

export default App;
