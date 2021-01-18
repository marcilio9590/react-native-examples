import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {
  AreaInput, Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText
} from './styles';


export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')} />
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
        <SubmitButton onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator
              size={20}
              color="#FFF"
            />
          ) : (
              <SubmitText>Acessar</SubmitText>
            )}

        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  )
}