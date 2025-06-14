import { StyleSheet, Text, View, Image ,TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient";
import React ,{ useEffect } from 'react'

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login"); // Navigate to Login after 2 sec
    }, 5000);
  }, []);
  return (
      <LinearGradient colors={["#8A2387", "#E94057", "#F27121"]} style={styles.container}>
         <Image style={styles.imagelogo} source={require("../assets/logopic.png.png")}/>
        <Text style={styles.footer}>@Copyright [Eman Nawaz FA21/BSSE/119]</Text>
      </LinearGradient>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
imagelogo:{
    width:200,
    height:200,
    marginBottom:30
  },
  footer: {
    position: "absolute",
    bottom: 20,
    color: "white",
  },
 
  
 
  
});

export default Splash