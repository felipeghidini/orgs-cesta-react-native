import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import topo from '../../../../../src/assets/topo.png'

import Texto from "../../../componentes/Texto";

const widthScreen = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return <>
    <Image source={topo} style={styles.topo}/>
    <Texto style={styles.titulo}>{ titulo }</Texto>
  </>
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: 578 / 768 * widthScreen,
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  }
})