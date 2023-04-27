import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Login from './pages/login';
import Signup from './pages/signup';
import Terms from './pages/signup/terms';

const Stack = createNativeStackNavigator()

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Group screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
          }}
        >
          <Stack.Screen name="login" component={Login}></Stack.Screen>
          <Stack.Screen name="signup" component={Signup}></Stack.Screen>
          <Stack.Screen name="terms" component={Terms}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
