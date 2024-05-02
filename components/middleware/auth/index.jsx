import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';

const AuthMiddleware = ({ children }) => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    Alert.alert('Connexion expirée', 'Votre session a expiré. Veuillez vous reconnecter.');
                    navigation.navigate('Login');
                } else {
                    const decodedToken = jwtDecode(token);
                    const currentTime = Date.now() / 1000;

                    if (decodedToken.exp < currentTime) {
                        Alert.alert('Connexion expirée', 'Votre session a expiré. Veuillez vous reconnecter.');
                        navigation.navigate('Login');
                    }
                }
            } catch (error) {
                console.error('Erreur lors de la vérification de l\'authentification:', error);
            }
        };

        checkAuthentication();
    }, []);

    return <>{children}</>;
};

export default AuthMiddleware;
