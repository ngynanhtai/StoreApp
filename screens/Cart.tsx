import React from "react";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, FlatList, StyleSheet } from "react-native";
import ListCart from "../components/ListCart";
import { GetCart, GetQuantityArray } from "../service/CartService";

export default class CartScreen extends React.Component<any, any> {
  constructor(props: any) {
    var cart: [] = [];
    var quantityArray: [] = [];
    useFocusEffect(
      React.useCallback(() => {
        const test = () => {
          cart = GetCart();
          quantityArray = GetQuantityArray();
        };
        return () => test();
      }, [GetCart(), GetQuantityArray()])
    );
    super(props);
    this.state = {
      cart: cart,
      quantityArray: quantityArray,
    };
  }

  render() {
    const { cart, quantityArray } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={cart}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <ListCart cart={item} quantityArray={quantityArray} />
          )}
        ></FlatList>
        {/* <ListCart style={styles.flatList} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16,
  },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
