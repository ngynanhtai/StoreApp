import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListCart from "../components/ListCart";
import { AddToCart, GetCart } from "../service/CartService";

export default class CartScreen extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      cart: GetCart(),
    };
  }

  render() {
    const { cart } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={cart}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <ListCart cart={item} />}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 16,
  },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
