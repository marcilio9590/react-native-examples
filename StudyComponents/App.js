import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Filmes from './src/components/Filmes';
import api from './src/services/Api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({ filmes: response.data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <ActivityIndicator color="#09A6FF" size={40} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>

          <FlatList
            style={styles.list}
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
          />
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {

  }
});