import React, { Component } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';

//convert?q=USD_BRL&compact=ultra&apiKey=46803fa5ee61f1fe555d
class Conversor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaA_valor: 0,
      valorConvertido: 0
    }
    this.convert = this.convert.bind(this);
  }

  async convert() {
    let de_para = this.state.moedaA + '_' + this.state.moedaB;
    const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=46803fa5ee61f1fe555d`);
    this.setState({ valorConvertido: (response.data[de_para] * parseFloat(this.state.moedaA_valor)).toFixed(2) });
    Keyboard.dismiss();
  }

  render() {
    const { moedaA, moedaB } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

        <TextInput
          placeholder="Valor a ser convertido"
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(value) => this.setState({ moedaA_valor: value })}
        />

        <TouchableOpacity style={styles.botao} onPress={this.convert}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>


        <Text style={styles.valorConvertido}>
          {(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}
        </Text>


      </View>
    );
  }
}

export default Conversor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  input: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5
  },
  botao: {
    width: 150,
    height: 45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  botaoTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF'
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15
  }
});