import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Filmes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { nome, foto } = this.props.data;
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.title}>{nome}</Text>

          <Image
            source={{ uri: foto }}
            style={styles.capa}
          />

          <View style={styles.areaBotao}>
            <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
              <Text style={styles.textoBotao}>Leia Mais</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  title: {
    fontSize: 18,
    padding: 15
  }, capa: {
    height: 250,
    zIndex: 2
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  textoBotao: {
    textAlign: 'center',
    color: '#FFF'
  }
});