import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import MainMenu from './Pages/MainMenu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
