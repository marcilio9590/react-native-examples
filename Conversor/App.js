import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Conversor from './src/components/Conversor';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="EUR" moedaB="BRL" />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});