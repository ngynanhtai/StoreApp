import { StyleSheet, View, FlatList, Alert } from "react-native";
import React from "react";
import ProductListItem from "../components/ListProduct";
import axios from "axios";
import { AddToCart } from "../service/CartService";

export default class ProductScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const { route, navigation } = props;
    const { categoryId, categoryName } = route.params;
    navigation.setOptions({ title: categoryName });
    this.state = {
      categoryId: categoryId,
      products: [],
    };
  }

  async componentDidMount() {
    axios
      .get("/products?category=" + this.state.categoryId)
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <ProductListItem
                  product={item}
                  onPress={() => {
                    AddToCart(item);
                    Alert.alert("Add to cart successfully !");
                    alert("Add to cart successfully !");
                  }}
                />
              </View>
            </View>
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrapper: {
    flex: 1 / 2,
  },
  product: {
    padding: 8,
  },
});
