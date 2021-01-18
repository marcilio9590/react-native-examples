import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Pessoas extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  },
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  }
});

export default Pessoas;