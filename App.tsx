import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component<{}, any> {

  render() {
    return <AppContainer />
  }
}

