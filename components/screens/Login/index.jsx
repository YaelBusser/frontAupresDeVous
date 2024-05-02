import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            setError('');

            if (!email || !password) {
                setError('Veuillez remplir tous les champs.');
                return;
            }

            const response = await axios.post('http://localhost:4001/auth/login', {
                email,
                password,
            });

            if (response && response.data && response.data.token) {
                await AsyncStorage.setItem('token', response.data.token);
                Alert.alert('Connexion réussie', response.data.message);
                navigation.navigate('Home');
            } else {
                setError('Erreur lors de la connexion. Veuillez réessayer.');
            }
        } catch (error) {
            setError(error.response.data.message || 'Erreur lors de la connexion.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
}
