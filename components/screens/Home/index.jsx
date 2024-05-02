import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import styles from './styles.jsx';
import Footer from "../../footer";
import Header from "../../header";

export default function Home({navigation}) {
    return (
        <>
            <View>
                <Header/>
                <View style={styles.content}>
                    <Text>Page protégée - AuthHome</Text>
                </View>
                <Footer/>
            </View>
        </>
    );
}
