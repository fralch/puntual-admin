import React, { useState, useEffect , useRef} from 'react';
import { View, Text, FlatList, StyleSheet, Image ,  Animated , TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Lista_personal from './lista.jsx';

function Personal() {

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
  ]);



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
              <Lista_personal />
            </View>

          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
    padding: 20,
    backgroundColor: '#302E34',
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
