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
            <Animated.View style={[styles.container,  { transform: [{ translateX: translationX }] }]}>
                <View style={{ marginLeft: 20,flexDirection: 'column',justifyContent: 'center',}} >
                  <Text style={{color: '#EA4D4A',fontSize: 16,fontWeight: 'bold'}}>Nombre</Text>
                  <Text style={{color: '#fff',fontSize: 13}}>Puesto</Text>
                  <Text style={{color: '#fff',fontSize: 13}}>Celular</Text> 
                </View>  
               
            </Animated.View>
        </PanGestureHandler>
    );
}

export default Lista_personal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        
        // backgroundColor: '#302E34',
    },
  
   
});