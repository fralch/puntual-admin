import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, 
        TouchableOpacity, ScrollView, Animated, Dimensions  } from 'react-native';



const { width, height } = Dimensions.get('window');

function Home() {
return (
    <View style={styles.container}>
        <View style={[styles.contenedor, {height: height*0.30}]}>
            <Text>Logo</Text>
            <Text>Sistema de Gestion de Personal</Text>
            <Text>Huancayo, 24 Octubre 2023</Text>

            <Text>11:07 AM </Text>
        </View>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -1, marginTop: -25, backgroundColor: '#EA4D4A',}]}  activeOpacity={0.7}>
            <Text>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -2, marginTop: -25, backgroundColor: '#EF772A'} ]} activeOpacity={0.7}>
            <Text>Asistencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -3, marginTop: -25, backgroundColor: '#FAD354'} ]} activeOpacity={0.7}>
            <Text>Tardanzas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contenedor, {zIndex: -4, marginTop: -25, backgroundColor: '#A77F6A'} ]} activeOpacity={0.7}>
            <Text>Faltas</Text>
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
    backgroundColor: '#243135',
    justifyContent: 'center',
    height : height * 0.20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    
  },
 
});



export default Home;