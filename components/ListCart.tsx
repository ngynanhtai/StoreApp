import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ListCart(props: any) {
  const { cart } = props;
  return (
    <View style={styles.container}>
      <Text>{cart.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
