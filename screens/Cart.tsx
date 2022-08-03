import React from "react";
import { View, FlatList, StyleSheet, RefreshControl } from "react-native";
import ListCart from "../components/ListCart";
import { GetCart, GetQuantityArray } from "../service/CartService";

export default class CartScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      cart: GetCart(),
      quantityArray: [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("tabPress", (e: any) => {
      this.setState({
        quantityArray: GetQuantityArray(),
      });
    });
  }

  render() {
    const { cart, refresh } = this.state;

    const onPullRefresh = () => {
      refresh(true);

      setTimeout(() => {
        refresh(false);
      }, 200);
    };
    console.log(GetQuantityArray());
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={cart}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <ListCart cart={item} quantityArray={GetQuantityArray()} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => onPullRefresh()}
            />
          }
        ></FlatList>
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
