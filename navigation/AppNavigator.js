import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/screens/Auth/Login';
import Register from "../components/screens/Auth/Register";
import styles from "./styles";
import GoBack from "../components/goBack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {jwtDecode} from "jwt-decode";
import AuthHome from "../components/screens/Auth/Home";
import Home from "../components/screens/Home";
import Header from "../components/header";
import Favoris from "../components/screens/Favoris";
import Publier from "../components/screens/Publier";
import Messages from "../components/screens/Messages";
import MonCompte from "../components/screens/MonCompte";

const Stack = createStackNavigator();
/*
options={({navigation}) => ({
                        header: () => (
                            <GoBack navigation={navigation}/>
                        ),
                    })}
 */
export default function AppNavigator() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    setIsAuthenticated(false);
                } else {
                    const decodedToken = jwtDecode(token);
                    const currentTime = Date.now() / 1000;

                    if (decodedToken.exp < currentTime) {
                        setIsAuthenticated(false);
                    }
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Erreur lors de la vérification de l\'authentification:', error);
            }
        };

        checkAuthentication();
    }, []);
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="AuthHome"
                    component={AuthHome}
                    options={({navigation}) => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({navigation}) => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen
                    name="Favoris"
                    component={Favoris}
                    options={({navigation}) => ({
                        headerShown: false,
                    })}
                />

                <Stack.Screen
                    name="Publier"
                    component={Publier}
                    options={({navigation}) => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen
                    name="Messages"
                    component={Messages}
                    options={({navigation}) => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen
                    name="MonCompte"
                    component={MonCompte}
                    options={({navigation}) => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={({navigation}) => ({
                        header: () => (
                            <GoBack navigation={navigation}/>
                        ),
                    })}
                />
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </>
    );
}
