import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Configuracion = () => {
  return (
    <View style={styles.estiloconfig}>
      <Text style={styles.textoestilo}>Configuracion</Text>
    </View>
  );
};

export default Configuracion;

const styles = StyleSheet.create({
  estiloconfig: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoestilo: {
    color: 'blue',
    fontSize: 30,
    flex: 1,
    fontWeight: 'bold',
    alignContent: 'center',
  },
});
