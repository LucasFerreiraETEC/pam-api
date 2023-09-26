import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function CardMovies({ titulo, nota, imagem, sinopse }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("details", {
          titulo,
          nota,
          imagem,
          sinopse
        })
      }
      style={styles.containerJogos}
    >
      <Image style={styles.images} source={{
        uri: `http://image.tmdb.org/t/p/w500/${imagem}`
      }} />
      <Text style={styles.titulo}>{titulo} </Text>

      <Text style={styles.textNota}> {nota} </Text>
    </TouchableOpacity>
  );
}
