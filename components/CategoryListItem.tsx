import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FOOD_IMAGES } from "../mock-db/image";

export default function CategoryListItem(props: any) {
  const { category, onPress } = props;

  let imageSource = null;
  if (category.id == 1) {
    imageSource = FOOD_IMAGES[1].uri;
  } else if (category.id == 2) {
    imageSource = FOOD_IMAGES[2].uri;
  } else if (category.id == 3) {
    imageSource = FOOD_IMAGES[3].uri;
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage} source={{ uri: imageSource }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
