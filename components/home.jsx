import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, 
        TouchableOpacity, ScrollView, Animated, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const today = () =>{
  // formato de fecha 27 de Octubre del 2020
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const monthName = new Date().toLocaleString('default', { month: 'long' });
  return `${date} de ${monthName} del ${year}`;


}

function Home() {
  const navigation = useNavigation();

return (
    <View style={styles.container}>
        <View style={[styles.contenedor, {height: height*0.32}]}>
            <Image style={{width: width*0.4, height: 60, marginVertical:20}} source={require('../assets/img/logo2.png')} />
            <Text style={[styles.texto, {fontSize:12, fontWeight: 'normal'}]} >Sistema de Gestion de Personal</Text>
            <Text style={[styles.texto, {fontSize:20, fontWeight: 'normal'}]} >{today()}</Text>

        </View>
        <TouchableOpacity 
          style={[styles.contenedor, {zIndex: -1, marginTop: -25, backgroundColor: '#EA4D4A',}]}  
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Personal')}
        >
            <Text style={styles.texto} >Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -2, marginTop: -25, backgroundColor: '#EF772A'} ]} 
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Asistencias')}
          >
            <Text style={styles.texto}>Asistencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -3, marginTop: -25, backgroundColor: '#FAD354'} ]} activeOpacity={0.7}
          onPress={() => navigation.navigate('Tardanzas')}
        >
            <Text style={styles.texto}>Tardanzas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -4, marginTop: -25, backgroundColor: '#A77F6A'} ]} activeOpacity={0.7}
          onPress={() => navigation.navigate('Faltas')}
        >
            <Text style={styles.texto}>Faltas</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contenedor: {
    alignItems: 'center',
    backgroundColor: '#302E34',
    justifyContent: 'center',
    height : height * 0.20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',

  }
 
});



export default Home;