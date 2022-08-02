import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./screens/Categories";
import Category from "./screens/Category";
import Cart from "./screens/Cart";
import Order from "./screens/Order";
import Settings from "./screens/Settings";

const ShoppingStack = createStackNavigator({
  Categories,
  Category,
});

const CartStack = createStackNavigator({
  Cart,
});

const OrderStack = createStackNavigator({
  Order,
});

const SettingsStack = createStackNavigator({
  Settings,
});

export default ShoppingStack;
