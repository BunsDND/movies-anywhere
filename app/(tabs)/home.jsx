import { ImageBackground, View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
// import { ImageBackground } from 'react-native-web';

const Home = () => {
  const [search, setSearch] = useState(''); // State to hold the search query

  // Movie data
  const nowPlayingMovies = [
    { id: '1', title: 'Inside Out 2', image: 'https://resizing.flixster.com/8yCWg9MRcT7LnnuHtqe1ACAyDHQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmZDY4MmFmLTE2ZGYtNDY1NS1iZmY5LWZmYjVjZjBkNTk3OC5qcGc=', genre: 'Animation' },
    { id: '2', title: 'Deadpool and Wolverine', image: 'https://amc-theatres-res.cloudinary.com/v1716212211/amc-cdn/production/2/movies/67500/67479/PosterDynamic/165188.jpg', genre: 'Drama/Adventure' },
    { id: '3', title: 'Blue Beetle', image: 'https://m.media-amazon.com/images/M/MV5BZmNjZDdmMDctY2Y2OC00ZGNmLTk4MTgtNGMyNmM0MTE0MzVlXkEyXkFqcGc@._V1_.jpg', genre: 'Comedy/Sci-fi' },
    { id: '4', title: 'Kingdom of the Planets', image: 'https://all.web.img.acsta.net/pictures/23/11/02/16/20/5164367.jpg/r_2500_x', genre: 'Action/Sci-fi' },
    { id: '5', title: 'The Wild Robot', image: 'https://resizing.flixster.com/H_01DJwgqQtq3M9GLavrM9_FL3g=/206x305/v2/https://resizing.flixster.com/c7fcjCvkHP4wiDlEdVRusMXCOws=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAzOWI1YzkwLTNiODAtNDNmYy05MTA1LTViZjg4ZTgyYTc1MC5qcGc=', genre: 'Animation/Adventure' },
    { id: '6', title: 'Barbie', image: 'https://variety.com/wp-content/uploads/2024/07/Terrifier-poster.jpeg?w=724', genre: 'Comedy/Fantasy' },
  ];

  const comingSoon = [
    { id: '1', title: 'Conclave', image: 'https://upload.wikimedia.org/wikipedia/en/7/76/Conclave_film_poster.jpg', genre: 'Thriller/Drama' },
    { id: '2', title: 'Goodrich', image: 'https://images.justwatch.com/poster/319842412/s718/goodrich-2024.jpg', genre: 'Drama/Comedy' },
    { id: '3', title: 'The Marvels', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mCNQ9c0UdzGREcU8dtL3PaUMIYWyDwpISQ&s', genre: 'Action/Adventure,' },
    { id: '4', title: 'The Hunger Games: . . .', image: 'https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_.jpg', genre: 'Action/Adventure' },
    { id: '5', title: 'Napoleon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbo99Iqb70b5h9PAIe8OAVfAWsmGue9Oz3QQ&s', genre: ' Drama/War' },
  ];

  const topMovies = [
    { id: '1', title: 'Barbie', image: 'https://musicart.xboxlive.com/7/ffd86600-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', genre: 'Comedy/Fantasy' },
    { id: '2', title: 'Oppenheimer', image: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg', genre: 'Drama/History' },
    { id: '3', title: 'The Equalizer 3', image: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theequalizer2_keyart_1400x2100_pvod.jpg?itok=puLUJVB-', genre: 'Action/Thriller' },
    { id: '4', title: 'Mission: Impossible - Dead Rec. . .', image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Mission_Impossible_III.jpg', genre: 'Action/Adventure' },
    { id: '5', title: 'Spider-Man: Across the Spider-Verse', image: 'https://i.ebayimg.com/images/g/gm8AAOSw2dJkTvoK/s-l400.jpg', genre: 'Action/Adventure' },
  ];
  const trending = [
    { id: '1', title: 'Killers of the Flower Moon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipg2c3w_h9FmIzkygz_izvJ0B3_wzYZN3Dw&s', genre: 'Crime/Drama' },
    { id: '2', title: 'The Nun II', image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/The_Nun_II_%282023%29.jpg', genre: 'Horror/Thriller' },
    { id: '3', title: 'Saw X', image: 'https://dx35vtwkllhj9.cloudfront.net/lionsgateus/saw-x/images/regions/us/updates/onesheet.jpg', genre: 'Horror/Thriller' },
    { id: '4', title: 'Paw Patrol: The Mighty Movie', image: 'https://m.media-amazon.com/images/M/MV5BODg0NDY1MjktMzA5MS00OGQ2LTliMWItZTdmZjNlYzQ2MWM1XkEyXkFqcGc@._V1_.jpg', genre: 'Action/Adventure' },
    { id: '5', title: 'The Creator', image: 'https://upload.wikimedia.org/wikipedia/en/9/94/The_Creator_2023_poster.jpg', genre: 'Sci-fi/Action' },
  ];
  const newMovie = [
    { id: '1', title: 'Terrifier 3', image: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Terrifier-final-poster.jpg', genre: 'Horror' },
    { id: '2', title: 'Saturday Night', image: 'https://cdn.kinocheck.com/i/in17njfuu5.jpg', genre: 'Drama' },
    { id: '3', title: 'Piece by Piece', image: 'https://m.media-amazon.com/images/M/MV5BMjUxMjE2YWQtY2YwMS00MTdkLTg0ZWQtMTQ0NzExY2U4NGZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', genre: 'Comedy' },
    { id: '4', title: 'Venom: The Last Dance', image: 'https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg', genre: 'Action/Sci-fi' },
    { id: '5', title: 'Smile 2', image: 'https://m.media-amazon.com/images/M/MV5BYTg5OTMyMGMtYzMwNC00NDMyLWE0OGUtMTQ1ODcwM2FjOTM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', genre: 'Horror/Mystery' },
  ];
  // Function to filter movies based on search
  const filterMovies = (movies) => {
    return movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  };
  const filterMoviesONgenre = (movies) => {
    return movies.filter(movie => movie.genre.toLowerCase().includes(search.toLowerCase()));
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={{ uri: item.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
      <Text style={styles.movieGenre}>{item.genre}</Text>
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
            <Text style={styles.sectionTitle}>Now Playing</Text>
            <FlatList
              horizontal
              data={filterMovies(nowPlayingMovies) && filterMoviesONgenre(nowPlayingMovies)} // Filtered movies
              renderItem={renderMovieItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Comming Soon Section */}
          <View> 
            <Text style={styles.sectionTitle}>Coming Soon</Text>
            <FlatList
              horizontal
              data={filterMovies(comingSoon) && filterMoviesONgenre(comingSoon)} // Filtered movies
              renderItem={renderMovieItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Top Movies Section */}
          <View> 
            <Text style={styles.sectionTitle}>Top Movies</Text>
            <FlatList
              horizontal
              data={filterMovies(topMovies) && filterMoviesONgenre(topMovies) } // Filtered movies
              renderItem={renderMovieItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Trending Section */}
          <View> 
            <Text style={styles.sectionTitle}>Trending</Text>
            <FlatList
              horizontal
              data={filterMovies(trending)&& filterMoviesONgenre(trending) } // Filtered movies
              renderItem={renderMovieItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* New Movies Section */}
          <View> 
            <Text style={styles.sectionTitle}>New Movies</Text>
            <FlatList
              horizontal
              data={filterMovies(newMovie) && filterMoviesONgenre(newMovie)  } // Filtered movies
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
    padding: 16,
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#fff",
  },
  movieCard: {
    width: 100,
    marginRight: 10,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  movieGenre: {
    fontSize: 12,
    color: '#666',
  },
});

export default Home;
