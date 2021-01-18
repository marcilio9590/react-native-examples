import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
import { Container, Logout, LogoutText, NewLink, NewText, Nome } from './styles';

export default function Profile() {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  return (
    <Container>
      <Header />
      <Nome>{user && user.nome}</Nome>
      <NewLink onPress={() => navigation.navigate('Register')}>
        <NewText>Registrar Gastos</NewText>
      </NewLink>
      <Logout onPress={signOut}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  )
}