import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/config/firebaseConnection';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  async function save() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        firebase.database().ref('users').child(response.user.uid).set({ nome: nome });
        alert('Usuário criado com sucesso.');
        setNome('');
        setEmail('');
        setPassword('');
        Keyboard.dismiss();
      })
      .catch((err) => {
        console.log(err);
        alert('algo deu errado');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        value={nome}
        onChangeText={(text) => { setNome(text) }}
      />

      <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        value={email}
        onChangeText={(text) => { setEmail(text) }}
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        underlineColorAndroid="transparent"
        onChangeText={(text) => { setPassword(text) }}
      />

      <Button
        title="Cadastrar"
        onPress={save}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  texto: {
    fontSize: 20
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  },

})
