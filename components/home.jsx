import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Animated, PanResponder, Linking  } from 'react-native';

function Home() {
return (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default Home;