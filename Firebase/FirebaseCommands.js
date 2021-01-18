import React, { useEffect, useState } from 'react';
import { Button, FlatList, Keyboard, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import User from './src/components/User';
import firebase from './src/config/firebaseConnection';
export default function App() {
  
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // console.ignoredYellowBox = ['Setting a timer'];

  useEffect(() => {

    async function getData() {
      //Buscando Dados
      //listener que ira ficar sempre obtendo o value do campo nome caso tenha alguma alteração na base
      // await firebase.database().ref('nome').on('value', (snapshot) => {
      //   setNome(snapshot.val());
      // });

      // await firebase.database().ref('nome').once('value', (snapshot) => {
      //   setNome(snapshot.val());
      // });

      // await firebase.database().ref('usuarios/1/nome').on('value', (snapshot) => {
      //   setNome(snapshot.val());
      // });

      // await firebase.database().ref('usuarios/1').on('value', (snapshot) => {
      //   setNome(snapshot.val().nome);
      //   setIdade(snapshot.val().idade);
      // });

      //Criar um nó
      // await firebase.database().ref('tipo').set('Cliente');

      //removend no ou chield
      //await firebase.database().ref('tipo').remove();

      //Criar chield dentro de um no
      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'fabio',
      //   cargo: 'Dev Junior'
      // })

      //Atualizando dados
      // await firebase.database().ref('usuarios').child(3).update({
      //   cargo: 'Arquiteto'
      // });


      await firebase.database().ref('usuarios').on('value', (snapshot) => {
        setUsuarios([]);
        snapshot.forEach((child) => {
          let data = {
            key: child.key,
            nome: child.val().nome,
            cargo: child.val().cargo
          };
          setUsuarios(oldArray => [...oldArray, data].reverse());
        });
        setLoading(false);
      });
    }
    getData();

  }, [])

  async function save() {
    if (nome && cargo) {
      let users = await firebase.database().ref('usuarios');
      let key = users.push().key;
      users.child(key).set({
        nome: nome,
        cargo: cargo
      });
      alert('Cadastrado com sucesso');
      setCargo('');
      setNome('');
      Keyboard.dismiss();
    }
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

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
        style={styles.input}
        value={cargo}
        underlineColorAndroid="transparent"
        onChangeText={(text) => { setCargo(text) }}
      />

      <Button
        title="Novo Funcionário"
        onPress={save}
      />

      {loading ? (<ActivityIndicator
        color="#121212"
        size={45}
      />) : (<FlatList
        keyExtractor={(item) => item.key}
        data={usuarios}
        renderItem={({ item }) => <User data={item} />}
      />)}



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
