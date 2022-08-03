import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { formatPrice, formatLongString } from "../utils/format";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon1 from "../assets/icon01.png";

export default function ListCart(props: any) {
  const { cart, quantityArray } = props;
  for (var i: number = 0; i < quantityArray.length; i++) {
    if (cart.id == quantityArray[i].id) {
      var quantity = quantityArray[i].quantity;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          // source={{ uri: cart.images[0].url }}
          source={Icon1}
        ></Image>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{formatLongString(cart.name)}</Text>
        <Text style={styles.infoPrice}>{formatPrice(cart.price)}</Text>
      </View>
      <View style={styles.action}>
        <Text style={styles.actionInfo}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              // let { quantityArray } = AddToCart(cart);
              // quantityArray.push(quantityArray as never);
            }}
          >
            <Ionicons name="ios-remove-circle" size={22}></Ionicons>
          </TouchableOpacity>
          <Text style={{ fontSize: 18 }}>{quantity}</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons name="ios-add-circle" size={22}></Ionicons>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
  },
  imageWrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    height: 64,
    width: 64,
  },
  info: {
    justifyContent: "center",
    paddingLeft: 10,
    flex: 3,
    flexDirection: "column",
  },
  infoTitle: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
  },
  infoPrice: {},
  action: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 2,
  },
  actionInfo: {
    letterSpacing: 8,
  },
});
