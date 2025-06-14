import { StyleSheet, Text, View, Image ,TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>Welcome to Home screen!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
    },
  });
export default Home