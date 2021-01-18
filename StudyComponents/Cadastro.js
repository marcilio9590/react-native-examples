import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Register from './src/components/Register';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Register />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece'
  }
});