import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

function Lista_personal(props) {
  const translationX = useRef(new Animated.Value(0)).current;
  const { nombre, puesto, celular } = props.parametros;


  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX } }],
    { useNativeDriver: false }
  );

  const handleRelease = (e) => {
    if (e.nativeEvent.translationX > 100) {
      console.log('funciono');
    }

    Animated.spring(translationX, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };
  const randomImage = () => {
    const random = Math.floor(Math.random() * 2) + 1;
    return random >1 ?<Image style={{ width: 50, height: 50, borderRadius: 50 }} source={require('../assets/img/user.png')} /> :
    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={require('../assets/img/user2.png')} /> 
  }


  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.END) {
            handleRelease(e);
          }
        }}
      >
        <Animated.View style={[styles.animated, { transform: [{ translateX: translationX }] }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 20, }}>
            <View style={{  flexDirection: 'row' }} >
              {randomImage()}
              <View style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', }}>
                <Text style={{ color: '#EA4D4A', fontSize: 16, fontWeight: 'bold' }}>{nombre}</Text>
                <Text style={{ color: '#fff', fontSize: 13 }}>{puesto}</Text>
                <Text style={{ color: '#fff', fontSize: 13 }}>{celular}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => console.log('llamando')}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#EA4D4A" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default Lista_personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#302E34',
  },
  animated: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#302E34',
  },


});