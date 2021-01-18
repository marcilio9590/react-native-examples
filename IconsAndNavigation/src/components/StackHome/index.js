import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home() {

  const navigation = useNavigation();
  function irSobre() {
    navigation.navigate('Sobre', { nome: 'Marcilio', email: 'marcilio@marcilio.com' });
  }

  return (
    <View>
      <Text>Home</Text>
      <Text>Bem vindo a tela Home!!</Text>
      <Button
        onPress={irSobre}
        title="Sobre"
      />
    </View>
  );
}