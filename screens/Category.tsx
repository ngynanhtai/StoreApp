import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import Icon01 from "../assets/icon01.png";
import Icon02 from "../assets/icon02.png";
import Icon03 from "../assets/icon03.png";
import ProductListItem from "../components/ProductListItem";
import axios from "axios";

export default class Category extends React.Component<any, any> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      title: navigation.getParam("categoryName"),
    };
  };
  constructor(props: any) {
    super(props);
    const { navigation } = props;
    this.state = {
      categoryId: navigation.getParam("categoryId"),
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/products?category=" + this.state.categoryId)
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
                <ProductListItem product={item} />
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
