import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import React from 'react';
import Icon01 from './assets/icon01.png';
import Icon02 from './assets/icon02.png';
import Icon03 from './assets/icon03.png';

export default class App extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Fried Chicken', image: Icon01},
        { id: 2, name: 'Pizza', image: Icon02},
        { id: 3, name: 'Steak', image: Icon03}
      ]
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <View style={styles.container}>
          <FlatList style={styles.flatList}
            data={ categories } 
            renderItem={({item}) => <CategoryListItem category={item}/>}
            keyExtractor={item => `${item.id}`}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16
  }
});
