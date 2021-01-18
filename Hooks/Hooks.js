import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  // Guardar referencia de elementos na tela
  const refInput = useRef(null);

  // componentDidMount
  useEffect(() => {
    async function getNome() {
      const nomeStorage = await AsyncStorage.getItem('nome');
      if (nomeStorage) {
        setNome(nomeStorage);
      }
    }
    getNome();

    //ComponentDidUnmount
    // return () => {};

  }, []);

  // 1° parametro -> funcção a ser executada, 2² parametros atributo do state que deseja ser monitorado
  // componentDidUpdate
  useEffect(() => {
    async function save() {
      try {
        await AsyncStorage.setItem('nome', nome);
      } catch (error) {
        console.log(error);
      }
    }
    save();
  }, [nome]);


  function alteraNome() {
    setNome(input);
    setInput('');
    Keyboard.dismiss();
  }

  function novoNome() {
    refInput.current.focus();
  }

  // use memo irá armazena o valor do nome em memoria e fazer com que o nome.lenght so seja chamado quando o valor da variavel nome for alterado
  // Sem o useMemo a cada alteração na tela o nome.length estava sendo chamado sem necessidade
  const letrasNome = useMemo(() => {
    console.log('Mudou');
    return nome.length;
  }, [nome]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Seu Nome"
        value={input}
        onChangeText={(text) => setInput(text)}
        ref={refInput}
      />

      <TouchableOpacity onPress={alteraNome} style={styles.btn}>
        <Text style={styles.btnText}>Mudar</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>Tem {letrasNome} letras.</Text>

      <TouchableOpacity onPress={novoNome}>
        <Text>Novo Nome</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  texto: {
    color: '#000',
    fontSize: 35
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF'
  }
});