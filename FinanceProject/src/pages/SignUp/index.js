import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {
  AreaInput, Background,
  Container,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/styles';

export default function SignUp() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(value) => setNome(value)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator
              size={20}
              color="#FFF"
            />
          ) : (
              <SubmitText>Cadastrar</SubmitText>
            )}
        </SubmitButton>
      </Container>
    </Background>
  )
}