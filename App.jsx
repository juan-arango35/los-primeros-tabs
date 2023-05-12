

import * as React from 'react'; 
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from './Pantallazos/Principal';
import Configuracion from './Pantallazos/Configuracion';
import Intermedio from './Pantallazos/Intermedio';


const Pestanas=createBottomTabNavigator(); 

const App = () => {
  return (
   
    <NavigationContainer>
      <Pestanas.Navigator> 
      <Pestanas.Screen name='Principal'  component={Principal} />
      <Pestanas.Screen name='Intermedio'  component={Intermedio} />

      <Pestanas.Screen name='Configuracion'  component={Configuracion} />
      </Pestanas.Navigator>
    </NavigationContainer>
  )
}

export default App