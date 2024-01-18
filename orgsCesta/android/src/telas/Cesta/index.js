import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';


function Cesta({ topo, detalhes, itens }) {
  return <ScrollView>
  <Topo {...topo} />
    <View style={styles.cesta}>
      <Detalhes {...detalhes} />
      <Itens {...itens} />
    </View>
  </ScrollView> 
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})

export default Cesta;