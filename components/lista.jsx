import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Lista_personal(props) {
  const navigation = useNavigation();
  const translationX = useRef(new Animated.Value(0)).current;
  const { id, nombre, puesto, celular } = props.parametros;


  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX } }],
    { useNativeDriver: false }
  );

  const handleRelease = (e) => {
    if (e.nativeEvent.translationX > 200) {
      navigation.navigate('ListaPersonalDetalle',{id});
    }

    Animated.spring(translationX, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };
  const randomImage = () => {
    return <View style={{
      width: 50,
      height: 50,
      borderRadius: 60,
      backgroundColor: '#EA4D4A',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 3,
    }}>
      <FontAwesome name="user" size={35} color="white" />
    </View>
  }

  const ir_detalle_personal = () => {
    navigation.navigate('ListaPersonalDetalle',{id});
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
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 0, }}>
            <View style={{  flexDirection: 'row' }} >
              {randomImage()}
              <View style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', }}>
                <Text style={{ color: '#EA4D4A', fontSize: 16, fontWeight: 'bold' }}>{nombre}</Text>
                <Text style={{ color: '#fff', fontSize: 13 }}>{puesto.toUpperCase()}</Text>
                <Text style={{ color: '#fff', fontSize: 13 }}>{celular}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => ir_detalle_personal()}>
              <MaterialIcons name="keyboard-arrow-right" size={35} color="#EA4D4A" />
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
    marginRight: 40
  },
  animated: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#302E34',
  },


});