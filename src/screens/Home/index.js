import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import { apiClient } from '../../utils/axios';

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {

    (async () => {
      const { data } = await apiClient.get('/popular?language=pt-BR');

      setPopularMovies(data.results);
    })();

    (async () => {
      const { data } = await apiClient.get('/top_rated?language=pt-BR');
      setTopRatedMovies(data.results);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header></Header>

      <SearchBar></SearchBar>

      <BannerMovies></BannerMovies>

      <Text style={styles.popularTitle}>Populares</Text>

      <View style={{ width: '90%' }}>
        {popularMovies.length > 0 ? (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={popularMovies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardMovies
                titulo={item.title}
                imagem={item.poster_path}
                sinopse={item.overview}
                nota={item.vote_average}
              />
            )}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>

      <Text style={styles.topRatedTitle}>Mais votados</Text>

      <View style={{ width: '90%' }}>
        {popularMovies.length > 0 ? (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={topRatedMovies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardMovies
                titulo={item.title}
                imagem={item.poster_path}
                sinopse={item.overview}
                nota={item.vote_average}
              />
            )}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },
  popularTitle: {
    fontSize: 25,
    color: '#FFF',
    textAlign: 'left',
    width: '90%',
    marginTop: 15,
  },
  topRatedTitle: {
    fontSize: 25,
    color: '#FFF',
    textAlign: 'left',
    width: '90%',
    marginTop: -25,
  },
});
