import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native-web';



const Location = () => {const [search, setSearch] = useState(''); // State to hold the search query

  // Movie data
  const nowPlayingMovies = [
    { id: '1', title: 'SM Cinema - SM Seaside City Cebu', image: 'https://lh5.googleusercontent.com/p/AF1QipN7AhQmvvqM1KwARfvQQQBiLMV_Zajyi4qigzup=w260-h175-n-k-no', loc: 'Cebu City, Cebu' },
    { id: '2', title: 'SM Cinema Cebu', image: 'https://lh3.googleusercontent.com/p/AF1QipPurVobmTSFD1eaxkwPdv8YwbpM7iAhqDOKx5ZS=s680-w680-h510', loc: 'Cebu City, Cebu' },
    { id: '3', title: 'Robinsons Movieworld Galleria Cebu', image: 'https://lh3.googleusercontent.com/p/AF1QipMWjr-svwweJ0YYZKyN4lM8J648okXDhtm3G7nv=s680-w680-h510', loc: 'Cebu City, Cebu' },
    { id: '4', title: 'J Centre Cinema', image: 'https://lh3.googleusercontent.com/p/AF1QipOM5pGyeFA4Y2PBuJLYEVzei6pkAXwy4wdCsfW6=s680-w680-h510', loc: 'Action/Sci-fi' },
  ];

  const comingSoon = [
    { id: '1', title: 'IMAX SM Cinema Cebu', image: 'https://lh3.googleusercontent.com/p/AF1QipOwQKIXBIwG5KlI_xF9x-lR41Jvp3vtAccYSlY_=s680-w680-h510', loc: 'Cebu City, Cebu' },
    { id: '2', title: 'Director’s Club', image: 'https://lh3.googleusercontent.com/p/AF1QipNkW0qFbP8s_BAuWeBVfr-y0ePqT1k6LE6ooaJT=s680-w680-h510', loc: 'Cebu City, Cebu' },
    { id: '3', title: 'IL Corso - Cinemas', image: 'https://lh3.googleusercontent.com/p/AF1QipMOS_t-D8FAP861zXefGP0jKgeoW5A8NbFbS7kU=s680-w680-h510', loc: 'Cebu City, Cebu' },
  ];

  const topMovies = [
    { id: '1', 
      title: 'Ayala Malls Cinemas Central Bloc', 
      image: 'https://lh3.googleusercontent.com/p/AF1QipPyTxN8OdF2C0PRaeJYSfFNX9olwwvr0NOGB2DH=s680-w680-h510', 
      loc: 'Cebu City, Cebu' },
    { id: '2', title: 'SM Cinema Consolacion', image: 'https://lh3.googleusercontent.com/p/AF1QipML0g45se50OtnpYHJTCIMJoIZFNsG0NyI2Bsll=s680-w680-h510', loc: 'Consolacion, Cebu' },
    { id: '3', title: 'Ayala Malls Cinemas', image: 'https://lh3.googleusercontent.com/p/AF1QipMe4dEVVlLAnlQTwWL-8Qh1RGEGULrD2esEMyOu=s680-w680-h510', loc: 'Cebu City, Cebu' },
  ];
  // Function to filter movies based on search
  const filterMovies = (movies) => {
    return movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={{ uri: item.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
      <Text style={styles.movieloc}>{item.loc}</Text>
    </View>
  );

  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch} // Set the search state as the user types
          />
          
          {/* Now Playing Section */}
          <View> 
            <Text style={styles.sectionTitle}>Near Me</Text>
            <FlatList
              horizontal
              data={filterMovies(nowPlayingMovies)} // Filtered movies
              renderItem={renderMovieItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Comming Soon Section */}
          <View> 
            <Text style={styles.sectionTitle}>Cebu City</Text>
            <FlatList
              horizontal
              data={filterMovies(comingSoon)} // Filtered movies
              renderItem={renderMovieItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Top Movies Section */}
          <View> 
            <Text style={styles.sectionTitle}>Philippines</Text>
            <FlatList
              horizontal
              data={filterMovies(topMovies)} // Filtered movies
              renderItem={renderMovieItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>




        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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

export default Location
