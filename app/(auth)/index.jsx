import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import React from 'react'

export default function App() {
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>MOVIES ANYWHERE</Text>
        <Text style={styles.subtitle}>Book Tickets, Anytime, Anywhere</Text>
        <Text style={styles.detail}>
          Enjoy a seamless movie booking experience. Choose seats, schedule times, and receive an e-ticket for instant entry to any of our partner cinemas.
        </Text>

        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Link href="/login" style={styles.button}>Log-in</Link>
          </View>
          <View style={styles.buttonContainer}>
            <Link href="/signup" style={styles.button}>Sign-up</Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 22,
    color: '#EAEAEA',
    fontStyle: 'italic',
    marginBottom: 25,
    textAlign: 'center',
    paddingHorizontal: 25,
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  detail: {
    fontSize: 14,
    color: '#D8D8D8',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 45,
    fontWeight: '300',
  },
  buttonWrapper: {
    width: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#2A528A',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
});
