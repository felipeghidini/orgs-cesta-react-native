import React from 'react';
import { StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';


function Cesta({ topo, detalhes}) {
  return <>
  <Topo {...topo} />
    <View style={styles.cesta}>
      <Detalhes {...detalhes} />
    </View>
  </> 
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})

export default Cesta;