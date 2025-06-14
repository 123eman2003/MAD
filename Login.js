import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#8A2387', '#E94057', '#F27121']} style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don’t have an account?
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
          {' '}Sign Up
        </Text>
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'white',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#8A2387',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'white',
    marginTop: 20,
  },
  signupLink: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
