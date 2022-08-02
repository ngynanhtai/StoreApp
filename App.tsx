import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default class App extends React.Component<{}, any> {
  render() {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  }
}
