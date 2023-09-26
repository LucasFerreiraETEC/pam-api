import { StyleSheet, Text, View, FlatList } from 'react-native';
import { movies } from './src/data/movies.ts';
import { series } from './src/data/series.ts';

// COMPONENTS
import Header from './src/components/Header/index.tsx';
import SerchBar from './src/components/SerchBar/index.tsx';
import Title from './src/components/Title/index.tsx';
import BannerFilms from './src/components/BannerFilms/index.tsx';
import HorizontalList from './src/components/HorizontalList/index.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SerchBar />
      <BannerFilms />
      <Title>Filmes</Title>
      <HorizontalList data={movies} />
      <Title>Series</Title>
      <HorizontalList data={series} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
  },
});
