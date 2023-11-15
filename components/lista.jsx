import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

function Lista_personal() {
    const translationX = useRef(new Animated.Value(0)).current;

    const handleGestureEvent = Animated.event(
      [{ nativeEvent: { translationX } }],
      { useNativeDriver: false }
    );
  
    const handleRelease = (e) => {
      if (e.nativeEvent.translationX < -100) {
        console.log('funciono');
      }
  
      // Volver a la posición inicial
      Animated.spring(translationX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    };


    return (
        <PanGestureHandler
            onGestureEvent={handleGestureEvent}
            onHandlerStateChange={(e) => {
                if (e.nativeEvent.state === State.END) {
                    handleRelease(e);
                }
            }}
        >
            <Animated.View style={[styles.container, { transform: [{ translateX: translationX }] }]}>
                <Text>Desliza hacia la izquierda</Text>
                <TouchableOpacity onPress={() => console.log('Elemento tocado')}>
                    <Text>Acción</Text>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>
    );
}

export default Lista_personal;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        elevation: 5,
    },
    cabecera: {
        backgroundColor: '#000',
        padding: 10,
        alignItems: 'center',
    },
    lista: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        elevation: 5,
    },
});