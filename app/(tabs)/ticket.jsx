import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';



const Tickets = () => {


  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
      <ScrollView>
      <View style={styles.headerContainer}> 
        <Image source={require('../../assets/logo.png')} style={styles.logobabaw }/>

      <Text style={styles.tabTitle}>Tickets</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    marginLeft:10,
    marginriGHT:10,
  },
  logobabaw: {
    width: 40, 
    height: 40,
    borderRadius: 10,
    position: 'absolute',
    left: 0, // Positions the logo on the right side of the container
  },
  tabTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1C3269',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    flex: 1, // Ensures the text takes up available space
    textAlign: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Darker shadow color for more contrast
    textShadowOffset: { width: 2, height: 2 }, // Increase offset for more shadow distance
    textShadowRadius: 3, // Increase blur radius for a softer shadow
  },
  
  movieCard: {
    width: 200,
    marginRight: 10,
  },
  movieImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  movieloc: {
    fontSize: 12,
    color: '#666',
  },
});

export default Tickets
