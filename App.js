import * as React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from './components/home';
import Personal from './components/personal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Stack.Screen name="Personal" options={{headerShown: false}} component={Personal} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


