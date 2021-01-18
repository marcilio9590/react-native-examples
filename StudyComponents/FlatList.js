import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Pessoas from './src/Pessoas';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'Marcilio', idade: 26, email: 'marcilio@marcilio.com' },
        { id: '2', nome: 'Joao', idade: 22, email: 'Joao@Joao.com' },
        { id: '3', nome: 'Marcos', idade: 45, email: 'Marcos@Marcos.com' },
        { id: '4', nome: 'Tadeu', idade: 18, email: 'Tadeu@Tadeu.com' },
        { id: '5', nome: 'Paulo', idade: 18, email: 'Paulo@Paulo.com' }
      ]
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.feed}
          renderItem={({ item }) => <Pessoas data={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;