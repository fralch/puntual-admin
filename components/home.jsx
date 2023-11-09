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
        <View style={[styles.contenedor, {zIndex: -1, marginTop: -30, backgroundColor: '#333',}]}>
            <Text>Personal</Text>
        </View>
        <View style={[styles.contenedor, {zIndex: -2, marginTop: -30, backgroundColor: '#666'} ]}>
            <Text>Asistencias</Text>
        </View>
        <View style={[styles.contenedor, {zIndex: -3, marginTop: -30, backgroundColor: '#999'} ]}>
            <Text>Tardanzas</Text>
        </View>
        <View style={[styles.contenedor, {zIndex: -4, marginTop: -30, backgroundColor: '#bbb'} ]}>
            <Text>Faltas</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenedor: {
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
    height : height * 0.20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
 
});



export default Home;