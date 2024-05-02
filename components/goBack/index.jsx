import {IconButton} from "react-native-paper";
import React from "react";
import {Image} from "react-native";

const GoBack = ({navigation}) => {
    const retour = require("../../assets/icons/goBack.svg");

    return (
        <button
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                border: "none",
                marginTop: 50,
                marginLeft: 20,
                width: "3rem",
                height: "3rem",
                padding: "0",
            }}
            onClick={() => navigation.goBack()}
        >
            <Image source={retour} style={{width: "3rem", height: "3rem", margin: "0", padding: "0"}}/>
        </button>
    )
}

export default GoBack;
