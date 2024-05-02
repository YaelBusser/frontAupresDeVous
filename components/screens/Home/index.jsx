import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    Pressable,
    ImageBackground,
    Image, Alert
} from 'react-native';

import styles from './styles.jsx';
import stylesMain from '../../../styles/main.jsx';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import AuthMiddleware from "../../middleware/auth";
import imageBackground from "../../../assets/images/bg-home.jpg";

export default function Home({ navigation }) {
    const imageBackground = require("../../../assets/images/bg-home.jpg");

    const [isAuth, setIsAuth] = useState(false);

    useEffect(async () => {
        const checkAuthStatus = async () => {
            try {
                setIsAuth(false);
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    const decodedToken = jwtDecode(token);
                    const currentTime = Date.now() / 1000;

                    if (decodedToken.exp >= currentTime) {
                        setIsAuth(true);
                    }
                }
            } catch (error) {
                console.error('Erreur lors de la vérification de l\'authentification:', error);
            }
        };

        await checkAuthStatus();

        // Mettre en place un écouteur pour vérifier l'authentification en temps réel
        const unsubscribe = navigation.addListener('focus', () => {
            checkAuthStatus();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <>
            {
                isAuth ? (
                    <View>
                        <Text>Page protégée - AuthHome</Text>
                    </View>
                ) : (
                    <ImageBackground source={imageBackground} style={styles.imageBackground}>
                        <View style={styles.container}>
                            <View style={styles.sectionPresentation}>
                                <View style={styles.blockText}>
                                    <Text style={[styles.text, styles.title]}>Auprès de vous</Text>
                                    <Text style={[styles.text, styles.subTitle]}>
                                        Venez en aide aux autres
                                    </Text>
                                </View>
                                <View style={styles.blockButtons}>
                                    <Pressable
                                        onPress={() => navigation.navigate('Login')}
                                        style={styles.AuthFormButton}>
                                        <Text style={[styles.AuthFormButtonText]}>Se connecter</Text>
                                    </Pressable>
                                    <Pressable
                                        onPress={() => navigation.navigate('Register')}
                                        style={styles.AuthFormButton}>
                                        <Text style={styles.AuthFormButtonText}>S'inscrire</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                )
            }
        </>
    );
}
