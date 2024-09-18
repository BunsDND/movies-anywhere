import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>MOVIES ANYWHERE</Text>
        <Text style={styles.subtitle}>Anytime, Anywhere</Text>

        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Link href="home" style={styles.button}>Log-in</Link>
          </View>
          <View style={styles.buttonContainer}>
            <Link href="/signup" style={styles.button}>Sign-up</Link>
          </View>
        </View>

        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // ensures the background image covers the screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', // adds a semi-transparent overlay
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 30, // makes the logo rounded
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
  },
  buttonWrapper: {
    width: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#2A528A', // solid color for button background
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    fontSize: 18,
    color: 'white', // color for the button text
    textAlign: 'center',
    width: '100%',
  },
});
