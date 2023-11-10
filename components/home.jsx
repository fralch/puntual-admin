import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, 
        TouchableOpacity, ScrollView, Animated, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

function Home() {
  const navigation = useNavigation();

return (
    <View style={styles.container}>
        <View style={[styles.contenedor, {height: height*0.32}]}>
            <Image style={{width: width*0.4, height: 60, marginVertical:20}} source={require('../assets/img/logo2.png')} />
            <Text style={[styles.texto, {fontSize:12, fontWeight: 'normal'}]} >Sistema de Gestion de Personal</Text>
            <Text style={[styles.texto, {fontSize:20, fontWeight: 'normal'}]} >Huancayo, 24 Octubre 2023</Text>

            <Text style={[styles.texto, {fontSize:35, fontWeight: 'normal', marginTop:20}]}>11:07 AM </Text>
        </View>
        <TouchableOpacity 
          style={[styles.contenedor, {zIndex: -1, marginTop: -25, backgroundColor: '#EA4D4A',}]}  
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Personal')}
        >
            <Text style={styles.texto} >Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -2, marginTop: -25, backgroundColor: '#EF772A'} ]} activeOpacity={0.7}>
            <Text style={styles.texto}>Asistencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -3, marginTop: -25, backgroundColor: '#FAD354'} ]} activeOpacity={0.7}>
            <Text style={styles.texto}>Tardanzas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -4, marginTop: -25, backgroundColor: '#A77F6A'} ]} activeOpacity={0.7}>
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
    backgroundColor: '#333',
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