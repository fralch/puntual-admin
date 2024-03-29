import * as React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from './components/home';
import Personal from './components/personal';
import ListaPersonalDetalle from './components/lista_detalle';
import Asistencias from './components/asistencias';
import Tardanzas from './components/tardanzas';
import Faltas from './components/faltas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Stack.Screen name="Personal" options={{headerShown: false}} component={Personal} />
      <Stack.Screen name="ListaPersonalDetalle" options={{headerShown: false}} component={ListaPersonalDetalle} />
      <Stack.Screen name="Asistencias" options={{headerShown: false}} component={Asistencias} />
      <Stack.Screen name="Tardanzas" options={{headerShown: false}} component={Tardanzas} />
      <Stack.Screen name="Faltas" options={{headerShown: false}} component={Faltas} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


