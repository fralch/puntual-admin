import React, { useState, useEffect , useRef} from 'react';
import { View, Text, FlatList, StyleSheet, Image ,  Animated , TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

import Lista_personal from './lista.jsx';

function Personal() {
  const navigation = useNavigation();
  const [personal, setPersonal] = useState();



  const ir_detalle_personal = () => {
    const id = 0;
    navigation.navigate('ListaPersonalDetalle',{id});
  }

  useEffect(() => {
    axios.get('http://192.168.1.17:3000/usuarios')
      .then(function (response) {
        setPersonal(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  useFocusEffect(() => {
    axios.get('http://192.168.1.17:3000/usuarios')
    .then(function (response) {
      setPersonal(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  });

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
                <Lista_personal parametros={{id: item.id, nombre: item.nombre, puesto: item.cargo, celular: item.celular}} />
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
