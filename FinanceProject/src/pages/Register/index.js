import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header';
import MyPicker from '../../components/MyPicker';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { Background, Input, SubmitButton, SubmitText } from './styles';

export default function Register() {
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState(null)
  const navigation = useNavigation();
  const { user: userContext } = useContext(AuthContext);

  async function handleAdd() {
    try {
      let uid = userContext.uid;
      let key = await firebase.database().ref('historic').child(uid).push().key;

      await firebase.database().ref('historic').child(uid).child(key).set({
        tipo: tipo,
        valor: parseFloat(valor),
        createdDate: format(new Date(), 'dd/MM/yyyy')
      });

      let user = firebase.database().ref('users').child(uid);
      await user.once('value').then((snapshot) => {
        let saldo = parseFloat(snapshot.val().saldo);
        tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);
        user.child('saldo').set(saldo);
      });
      Keyboard.dismiss();
      setValor('');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('Ops... Algo deu errado!');
    }
  }

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />
        <SafeAreaView style={{ alignItems: 'center' }}>
          <Input placeholder="Valor Desejado"
            keyboardType="numeric"
            returnKeyType="next"
            value={valor}
            onChangeText={(val) => setValor(val)}
            onSubmitEditing={() => Keyboard.dismiss()} />

          <MyPicker
            onChange={setTipo} value={tipo}
          />

          <SubmitButton onPress={() => handleSubmit()}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}