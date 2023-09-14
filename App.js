import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Login from './screens/login';
import Signup from './screens/signup';
import Identity from './screens/signup/identity';
import Personal from './screens/signup/personal';
import Terms from './screens/signup/terms';

const Stack = createNativeStackNavigator()

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const platform = Platform.OS

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" style='dark' />
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
          <Stack.Screen name="signup" component={Signup} options={{ title: 'Kewarganegaraaan' }}></Stack.Screen>
          <Stack.Screen name="terms" component={Terms} options={{ title: 'Ketentuan Pengguna' }}></Stack.Screen>
          <Stack.Screen name="identity" component={Identity} options={{ title: 'Identitas' }}></Stack.Screen>
          <Stack.Screen name="personal" component={Personal} options={{ title: 'Data Pribadi' }}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
