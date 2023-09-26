import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import StarRating from "react-native-star-rating-widget";

const width = Dimensions.get("window").width;

export default function Details({ route, navigation }) {
  const { params } = route;

  const image = `http://image.tmdb.org/t/p/w500${params.imagem}`;

  console.log(image);

  function backToHome() {
    navigation.navigate("home");
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri:image}} style={styles.image} resizeMode="contain" />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{params.titulo}</Text>
        <View style={styles.ratingContainer}>
          <StarRating
            starSize={20}
            enableSwiping={false}
            maxStars={10}
            enableHalfStar={true}
            rating={Number(params.nota)}
            onChange={() => {}}
          />
          <Text style={styles.rating}>{params.nota}</Text>
        </View>
        <Text style={styles.synopsisTitle}>Sinopse</Text>
        <Text style={styles.synopsis}>{params.sinopse}</Text>
      </View>

      <TouchableOpacity
        style={styles.backArrow}
        activeOpacity={0.7}
        onPress={backToHome}
      >
        <AntDesign name="arrowleft" color="#FFF" size={35} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 610,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  container: {
    backgroundColor: "#141a29",
    flex: 1,
    position: "relative",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    color: "#FFF",
    fontSize: 17,
  },
  descriptionContainer: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 15,
    color: "#FFF",
    marginBottom: 10,
  },
  synopsisTitle: {
    color: "#FFF",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 600,
  },
  synopsis: {
    color: "#FFF",
    marginBottom: 10,
    textAlign: "left",
  },

  backArrow: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
