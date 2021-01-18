import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function logar() {
    navigation.navigate('Login');
  }

  function cadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.botao} onPress={logar}>
        <Text style={styles.btnText}>Fazer Login</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.botao} onPress={cadastro}>
        <Text style={styles.btnText}>Cadastro</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 23,
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#FF0000',
    padding: 8,
    width: 250,
    borderRadius: 3,
    marginBottom: 5
  }
})
