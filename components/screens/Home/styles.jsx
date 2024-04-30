import {StyleSheet} from "react-native";
import { primaryColor, primaryFont } from "../../../styles/main";
const styles = StyleSheet.create({
   imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    width: "100%",
    height: "100%",
  },
  sectionPresentation: {
    marginTop: "auto",
    marginBottom: 50,
    alignItems: "center"
  },
  blockText: {
    width: "80%",
    marginBottom: 40
  },
  text: {
    color: "white",
    fontFamily: primaryFont
  },
  title: {
    fontSize: 16
  },
  subTitle: {
    fontSize: 34
  },
  blockButtons: {
    alignItems: "center",
    gap: 10,
    width: "100%"
  },
  AuthFormButton: {
    backgroundColor: primaryColor,
    width: "80%",
    justifyContent: "center",
    borderRadius: 20,
    color: "white",
  },
  AuthFormButtonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: primaryFont,
    padding: 20,
    color: "white"
  },
});

export default styles;