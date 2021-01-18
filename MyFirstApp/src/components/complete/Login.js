import React, { Component } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Login extends Component {

  clicou = () => {
    Alert.alert("Vamo de BIKE", "Você Clicou")
  }

  state = {
    name: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          onChangeText={text => this.state.name = text}
        />

        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home', { 'name': this.state.name }) }} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    padding: 10,
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  button: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})