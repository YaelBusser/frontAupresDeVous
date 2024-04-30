import React from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  ImageBackground,
  Image
} from 'react-native';

import styles from './styles.jsx';
import stylesMain from '../../../styles/main.jsx';

export default function Home({ navigation }) {
  const imageBackground = require("../../../assets/images/bg-home.jpg");

  return (
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
              onPress={() => navigation.navigate('AuthRegistration')}
              style={styles.AuthFormButton}>
              <Text style={styles.AuthFormButtonText}>S'inscrire</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}