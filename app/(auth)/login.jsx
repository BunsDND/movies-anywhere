// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Image} from 'react-native';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => { navigation.navigate('/') }}
      >
        <Ionicons name="arrow-back-circle-outline" size={40} color="white" />
      </TouchableOpacity>
      
      <View style={styles.overlay}>
        <View style={styles.container}>      
          <Image source={require('../../assets/logo.png')} style={styles.logo} />

          <Text style={styles.headerText}>Log-in</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
          />

          {/* Password Input with Icon */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              placeholderTextColor="#999"
            />
            <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Ionicons
                name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>


          <View style={styles.buttonContainer}>
          <Button title="Sign - In " color="#007BFF"onPress={() => { navigation.navigate('/home') }} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    position: 'relative', // to contain the icon within the input
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    paddingRight: 40, // add space for the icon
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 12, // vertically center the icon
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  backButton:{
    position: 'absolute',
    top: 10, // Adjust based on your needs
    left: 10, // Adjust based on your needs
    zIndex: 1,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 30, // makes the logo rounded
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darkens the background for better text readability
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for a modern look
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // Adds a shadow effect on Android
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
});
