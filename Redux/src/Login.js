import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect, useDispatch, useSelector } from 'react-redux';
import { editEmail, editSenha } from './actions/AuthActions';

function Login() {

  const [email, setEmail] = useState(useSelector(state => state.auth.email));
  const [senha, setSenha] = useState(useSelector(state => state.auth.senha));

  const dispatch = useDispatch();

  function entrar() {
    dispatch(editEmail(email));
    dispatch(editSenha(senha));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nomeInput}> Email:</Text>
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={(txt) => setEmail(txt)}
        value={email} />

      <Text style={styles.nomeInput}> Senha:</Text>
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={(txt) => setSenha(txt)}
        value={senha}
        secureTextEntry />

      <Button
        title="Entrar"
        onPress={entrar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#CECE',
    marginBottom: 10
  },
  nomeInput: {
    fontSize: 23
  }
});


const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    senha: state.auth.senha
  }
}

const LoginConnect = connect(mapStateToProps, { editEmail, editSenha })(Login);


export default LoginConnect;