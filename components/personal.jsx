import React, { useState, useEffect } from 'react';
import { View, Text, FlatList , StyleSheet} from 'react-native';

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
      nombre: 'Pedro Perez',
      puesto: 'Gerente',
      celular: '999999999',
    },
    {
      id: 3,
      nombre: 'Juan Perez',
      puesto: 'Gerente',
      celular: '999999999',
    },
    {
      id: 4,
      nombre: 'Pedro Perez',
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
      nombre: 'Pedro Perez',
      puesto: 'Gerente',
      celular: '999999999',
    }
  ]);

  useEffect(() => {


  }, []);

  return (
    <View>
      <Text>Personal de la empresa:</Text>
      <FlatList
        data={personal}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Text>{item.puesto}</Text>
            <Text>{item.celular}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default Personal;

const styles = StyleSheet.create({
    
});
