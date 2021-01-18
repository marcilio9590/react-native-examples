import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonMenu, Container } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu onPress={() => { navigation.toggleDrawer() }}>
        <Icon
          name="menu"
          color="#FFF"
          size={35}
        />
      </ButtonMenu>
    </Container>
  )
}
