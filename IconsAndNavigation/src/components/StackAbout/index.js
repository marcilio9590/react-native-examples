import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function About({ route }) {
  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      title: `Sobre ${route.params?.nome}`
    });
  }, []);


  return (
    <View style={styles.container}>

      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>

      <Button
        onPress={() => navigation.goBack()}
        title="Voltar para home"
      />
      <Button
        onPress={() => navigation.navigate('Contato')}
        title="Contato"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});