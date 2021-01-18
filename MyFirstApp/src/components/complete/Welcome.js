import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/App';

export default class Welcome extends Component {

  state = {
    slogan: 'Junte seus amigos para o pedal'
  }

  alternar = () => {
    this.setState({
      slogan: 'Você chamou seus amigos'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.botao}
          onPress={this.alternar}>
          <Text>Alterar Slogan</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.props.title}</Text>
        <Text style={styles.slogan}>{this.state.slogan}</Text>
      </View>
    )
  }
}