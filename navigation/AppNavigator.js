import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/screens/Home';
import Login from '../components/screens/Login';
import Register from "../components/screens/Register";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
