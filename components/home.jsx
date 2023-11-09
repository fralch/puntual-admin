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
        <View style={[styles.contenedor, {zIndex: -1, marginTop: -30, backgroundColor: '#332F8C',}]}>
            <Text>Personal</Text>
        </View>
        <View style={[styles.contenedor, {zIndex: -2, marginTop: -30, backgroundColor: '#5B56ED'} ]}>
            <Text>Asistencias</Text>
        </View>
        <View style={[styles.contenedor, {zIndex: -3, marginTop: -30, backgroundColor: '#42B9F3'} ]}>
            <Text>Tardanzas</Text>
        </View>
        <View style={[styles.contenedor, {zIndex: -4, marginTop: -30, backgroundColor: '#F29C9C'} ]}>
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
    backgroundColor: '#252540',
    justifyContent: 'center',
    height : height * 0.20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
 
});



export default Home;