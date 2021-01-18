import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/config/firebaseConnection';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function save() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((val) => {
        alert('Usuário criado com sucesso: ' + val.user.email)
      })
      .catch((err) => {
        console.log(err);
        if (err.code === 'auth/weak-password') {
          alert('sua senha deve ter pelo menos 6 caracteres.');
          return;
        }
        if (err.code === 'auth/invalid-email') {
          alert('Email inválido.');
          return;
        }
        alert('Ops algo deu errado');
      });

    setEmail('');
    setPassword('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
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
