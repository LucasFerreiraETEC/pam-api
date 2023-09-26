import { FlatList } from 'react-native';
import React from 'react';
import { Media } from '../../models/Media';
import CardItem from '../cardItem';
import { styles } from './style';

interface HorizontalListProps {
  data: Media[];
}

export default function HorizontalList({ data }: HorizontalListProps) {
  return (
    <FlatList
      style={styles.listContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => (
        <CardItem
          nome={item.nome}
          nota={item.nota}
          imagem={item.imagem}
          type={item.tipo}
        />
      )}
    />
  );
}
