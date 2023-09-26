import React from 'react';

import { Text, Image } from 'react-native';
import styles from './style';

export default function BannerFilms() {
  const images = Math.floor(Math.random() * 10 + 1);

  return (
    <>
      <Text style={styles.textBanner}> Em cartaz </Text>

      <Image
        style={styles.imageBanner}
        source={require(`../../../assets/films/filme${images}.jpg`)}
      />
    </>
  );
}
