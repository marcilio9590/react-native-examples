import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Contato" onPress={() => navigation.navigate('Contato')} />
      <Button
        title="Abrir Menu" onPress={() => navigation.toggleDrawer()} />
    </View>
  )
}

const styles = StyleSheet.create({})
