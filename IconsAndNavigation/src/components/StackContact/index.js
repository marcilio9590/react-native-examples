import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';


export default function Contact() {
  const navigation = useNavigation();

  return (
    <View>

      <Text>Bem vindo a tela Contato</Text>

      <Button
        onPress={() => navigation.goBack()}
        title="Voltar Tela"
      />

      {/* necessário fazer o dispatch para que toda a pilha de navegações seja zerada e mandar o usuário de volta para o inicirio */}
      <Button
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        title="Voltar para Home"
      />

    </View>
  );
}