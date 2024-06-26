import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles.jsx';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            setError('');

            if (!lastName || !firstName || !email || !password || !confirmPassword) {
                setError('Veuillez remplir tous les champs.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Veuillez saisir une adresse e-mail valide.');
                return;
            }

            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-={}[\]:";'<>?,.\/])(?=.*[^\s]).{8,}$/;
            if (!passwordRegex.test(password)) {
                setError('Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un caractère spécial et un chiffre.');
                return;
            }

            if (password !== confirmPassword) {
                setError('Les mots de passe ne correspondent pas.');
                return;
            }

            const response = await axios.post('http://localhost:4001/auth/register', {
                name: lastName,
                firstname: firstName,
                email,
                password,
            });

            console.log('Inscription réussie:', response.data.message);
            alert('Inscription réussie: ' + response.data.message);

            navigation.navigate('Login');

        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error.response.data.message);
            setError(error.response.data.message || 'Erreur lors de l\'inscription. Veuillez réessayer.');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inscription</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Prénom"
                value={firstName}
                onChangeText={setFirstName}
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
        </View>
    );
}
