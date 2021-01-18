import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
  render() {

    const { navigation } = this.props;
    const name = navigation.getParam('name');

    return (
      <View style={styles.container}>
        <Image style={styles.imageProfile} source={require('../assets/profile.png')} />
        <Text style={styles.title}> Olá {name} !!! </Text>
        <Text style={styles.subTitle}> Bem vindo a Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: '#ecf0f1'
  },
  subTitle: {
    fontSize: 16,
    color: 'red'
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 100
  }
})
