import React, { useState, useEffect } from 'react';
import { View, Text, FlatList , StyleSheet, Image} from 'react-native';

function Personal() {
  const [personal, setPersonal] = useState([
    {
      id: 1,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 2,
      nombre: 'Maria Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 3,
      nombre: 'Pedro Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 4,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 5,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 6,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 7,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 8,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 9,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 10,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 11,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 12,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 13,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    {
      id: 14,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular : '999999999',
    },
    
    
   
  ]);

  const randomImage = () => {
    const random = Math.floor(Math.random() * 2) + 1;
    return random >1 ?<Image style={{ width: 50, height: 50, borderRadius: 50 }} source={require('../assets/img/user.png')} /> :
    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={require('../assets/img/user2.png')} /> 
  }

  useEffect(() => {
    

  }, []);

  return (
    <View style={styles.container} >
      <View style={styles.cabecera}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Personal</Text>
      </View>
      <FlatList
        data={personal}
        renderItem={({ item }) => (
          <View style={styles.lista}>
              <View style={{  flexDirection: 'row',alignItems: 'center',}}>
                {randomImage()}
                <View style={{ marginLeft: 20,flexDirection: 'column',justifyContent: 'center',}} >
                  <Text style={{color: '#EA4D4A',fontSize: 16,fontWeight: 'bold'}}>{item.nombre}</Text>
                  <Text style={{color: '#fff',fontSize: 13}}>{item.puesto}</Text>
                  <Text style={{color: '#fff',fontSize: 13}}>{item.celular}</Text> 
                </View>  
              </View>
                 
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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
  cabecera:{
    backgroundColor: '#302E34',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  
  
    
});
