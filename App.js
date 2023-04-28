import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Login from './pages/login';
import Signup from './pages/signup';
import Identity from './pages/signup/identity';
import Terms from './pages/signup/terms';

const Stack = createNativeStackNavigator()

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const platform = Platform.OS

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator initialRouteName='login'>
        <Stack.Group screenOptions={{
            headerTitleAlign: 'center',
            headerShown: (platform === 'ios'),
            animation: 'fade_from_bottom',
          }}
        >
          <Stack.Screen 
            options={{headerShown: false}}
            name="login" 
            component={Login}>
          </Stack.Screen>
          <Stack.Screen name="signup" component={Signup} options={{ title: 'Nationality' }}></Stack.Screen>
          <Stack.Screen name="terms" component={Terms} options={{ title: 'Terms' }}></Stack.Screen>
          <Stack.Screen name="identity" component={Identity} options={{ title: 'Identity' }}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
