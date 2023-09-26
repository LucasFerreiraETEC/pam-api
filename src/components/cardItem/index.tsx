import React1 from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

interface CardItemProps {
  nome: string;
  nota: number;
  imagem: string;
  type: 'serie' | 'movie';
}

export default function CardItem({ nome, nota, imagem, type }: CardItemProps) {
  return (
    <TouchableOpacity style={styles.containerFilmes}>
      <Image
        source={
          type === 'movie'
            ? require(`../../../assets/films/${imagem}`)
            : require(`../../../assets/series/${imagem}`)
        }
        style={styles.imagemFilmes}
      />
      <Text style={styles.tituloFilmes}>{nome}</Text>
      <Text style={styles.notaFilme}> {nota}</Text>
    </TouchableOpacity>
  );
}
