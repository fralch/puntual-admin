import React, { useState, useEffect , useRef} from 'react';
import { View, Text, FlatList, StyleSheet, Image ,  Animated , TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Lista_personal from './lista.jsx';

function Personal() {
  const navigation = useNavigation();
  const [personal, setPersonal] = useState([
    {
      id: 1,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular: '999999999',
    },
    {
      id: 2,
      nombre: 'Maria Perez',
      puesto: 'Gerente',
      celular: '999999999',
    },
    {
      id: 3,
      nombre: 'Pedro Perez',
      puesto: 'Gerente',
      celular: '999999999',
    },
    {
      id: 4,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular: '999999999',
    },
    {
        id: 5,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 6,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 7,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 8,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 9,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 10,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 11,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 12,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 13,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 14,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 15,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 16,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 17,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 18,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 19,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 20,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    },
    {
        id: 21,
        nombre: 'Juan Perez',
        puesto: 'Gerente',
        celular: '999999999',
    }
    
  ]);

  const ir_detalle_personal = () => {
    const id = 0;
    navigation.navigate('ListaPersonalDetalle',{id});
  }

  useEffect(() => {

  }, []);

  return (
    <GestureHandlerRootView style={styles.container} >
      <View style={styles.cabecera}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Personal</Text>
      </View>
      <FlatList
        data={personal}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Lista_personal parametros={{nombre: item.nombre, puesto: item.puesto, celular: item.celular}} />
            </View>

          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 20, }} 
            onPress={() => ir_detalle_personal()}
        >
          <Ionicons name="ios-add-circle" size={60} color="#EA4D4A" />
        </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302E34',
    paddingTop: 40,

  },
  lista: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',

  },
  cabecera: {
    backgroundColor: '#302E34',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },



});
