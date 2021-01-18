import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class StudyComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: ''
    }
    this.salvarNome = this.salvarNome.bind(this);
  }

  salvarNome() {
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }

  //ComponentDidMount - executado quando o componente é montado em tela
  async componentDidMount() {
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({ nome: value });
    })
  }

  //ComponentDidUpdate - Monitorar sempre que um state for atualizado
  async componentDidUpdate(_, prevState) {
    const { nome } = this.state;
    if (prevState !== nome) {
      await AsyncStorage.setItem('nome', nome);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.value}
            onChangeText={(text) => this.setState({ input: text })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.salvarNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome: {
    fontSize: 30,
    marginTop: 15,
    textAlign: 'center'
  }
}); 