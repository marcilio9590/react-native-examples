import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class ModalBody extends Component {

  render() {
    return (
      <View style={styles.viewModal}>
        <Text style={styles.textModal}>Seja Bem Vindo</Text>
        <Button title="Fechar" onPress={this.props.close} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewModal: {
    backgroundColor: '#292929',
    width: '100%',
    height: 350,
    borderRadius: 15,
    alignItems: 'center'
  },
  textModal: {
    color: '#FFF',
    fontSize: 29,
    paddingTop: 15,
    textAlign: 'center'
  }
});