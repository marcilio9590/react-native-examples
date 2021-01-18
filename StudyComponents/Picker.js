import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {
          key: 1,
          nome: 'Calabresa',
          valor: 35.9
        },
        {
          key: 2,
          nome: 'Mussarelas',
          valor: 45.9
        },
        {
          key: 3,
          nome: 'Peperoni',
          valor: 50.9
        },
        {
          key: 4,
          nome: 'Cartola',
          valor: 25.9
        }
      ]
    }
  }

  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.selected}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.selected}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
  },
  selected: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});