import { StyleSheet, View, FlatList } from "react-native";
import CategoryListItem from "../components/ListCategory";
import React from "react";
import axios from "axios";

export default class CategoriesScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    axios
      .get("/categories")
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={categories}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <CategoryListItem
              category={item}
              onPress={() => {
                navigation.navigate("Product", {
                  categoryName: item.name,
                  categoryId: item.id,
                });
              }}
            />
          )}
        />
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
