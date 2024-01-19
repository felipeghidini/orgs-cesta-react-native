import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';


function Cesta({ topo, detalhes, itens }) {
  return <>
  <FlatList
    data={itens.lista}
    renderItem={Item}
    keyExtractor={({ nome }) => nome }
    ListHeaderComponent={() => {
      return <>
        <Topo {...topo} />
        <View style={styles.cesta}>
          <Detalhes {...detalhes}/>
          <Texto>{ itens.titulo }</Texto>
        </View>
      </>
    }}
  />

  <Topo {...topo} />
    <View style={styles.cesta}>
      <Detalhes {...detalhes} />
    </View>
  </> 
}

const styles = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})

export default Cesta;