import {StyleSheet} from "react-native";
import stylesMain from "../../styles/main";

const styles = StyleSheet.create({
    containerFooter: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    containerNav: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        minWidth: 33,
        minHeight: 33,
        maxWidth: 33,
        maxHeight: 33,
        resizeMode: 'contain',
    },
    iconText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: "10px",
        fontFamily: "Arial"
    },
    textActive:{
        fontWeight: "bold"
    }
});

export default styles;