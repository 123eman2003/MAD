import { StyleSheet, Text, View, Image ,TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const Signup = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient colors={["#8A2387", "#E94057", "#F27121"]} style={styles.container}>
          <Text style={styles.title}>Sign up</Text>
    
          <TextInput style={styles.input} placeholder="Full name"  />
          <TextInput style={styles.input} placeholder="Enter your email" />
          <TextInput style={styles.input} placeholder="Password"  secureTextEntry />
          <TextInput style={styles.input} placeholder="Re-enter password"  secureTextEntry />
    
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
    
          <Text style={styles.signupText}>
            Already have an account? {" "}
            <Text style={styles.signupLink} onPress={() => navigation.navigate("Login")}>
                Login
            </Text>
          </Text>
          <Text style={styles.footer}>@Copyright [Eman Nawaz FA21/BSSE/119]</Text>
        </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 30,
    },
    title: {
      fontSize: 50,
    fontWeight: "bold",
    color: "white",
    marginBottom: 50,
  
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      marginBottom: 15,
      borderRadius: 8,
      paddingHorizontal: 15,
  
      color: "white",
    },
    button: {
      width: "100%",
      height: 50,
      marginTop:10,
      backgroundColor: "hsla(261, 77.70%, 49.20%, 0.83)",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight:'700'
    },
    signupText: {
      color: "white",
      marginTop: 20,
    },
    signupLink: {
      color: "hsla(261, 77.70%, 49.20%, 0.83)",
      fontWeight: "800",
    },
    footer: {
        position: "absolute",
        bottom: 20,
        color: "white",
      },
     
  });

export default Signup