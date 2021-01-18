import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Home extends Component {

  static navigationOptions = {
    drawerLabel: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Você está na HOME</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100
  }
})
