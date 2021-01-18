import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/config/firebaseConnection';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  async function logout() {
    await firebase.auth().signOut();
    setUser('');
    alert('Deslogado com sucesso.');
  }

  async function login() {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        setEmail('');
        setPassword('');
        setUser(response.user.email);
        alert('Bem vindo:  ' + response.user.email)
      }).catch((err) => {
        alert('Ops algo deu errado');
        return;
      });

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
        title="Login"
        onPress={login}
      />


      {user.length > 0 ?
        (
          <View>
            <Text style={[styles.texto, styles.center]}>{user}</Text>
            <Button
              title="Logout"
              onPress={logout} />
          </View>
        ) : (<Text style={[styles.texto, styles.center]}>Nenhum usuário logado</Text>)}


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
  center: {
    textAlign: 'center'
  }
})
