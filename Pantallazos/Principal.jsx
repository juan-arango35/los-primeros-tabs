import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Principal = () => {
  return (
    <View style={styles.estiloprincipal}>
      <Text style={styles.letraestilos}>Principal</Text>
    </View>
  );
};

export default Principal;

const styles = StyleSheet.create({
  estiloprincipal: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letraestilos: {
    color: 'black',
    fontSize: 30,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
  },
});
