import { format, isPast } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import DatePicker from '../../components/Datepicker';
import Header from '../../components/Header';
import HistoricItem from '../../components/HistoricItem';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { Area, Background, Container, List, Nome, Saldo, Title } from './styles';

export default function Home() {
  const { user } = useContext(AuthContext);
  const [historic, setHistoric] = useState();
  const [saldo, setSaldo] = useState(0);
  const [dateFilter, setDateFilter] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const uid = user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(parseFloat(snapshot.val().saldo));
      });

      await firebase.database().ref('historic')
        .child(uid)
        .orderByChild('createdDate')
        .equalTo(format(dateFilter, 'dd/MM/yyyy'))
        .limitToLast(10)
        .on('value', (snapshot) => {
          setHistoric([]);
          snapshot.forEach(child => {
            let item = {
              key: child.key,
              tipo: child.val().tipo,
              valor: child.val().valor,
              createdDate: child.val().createdDate
            };
            setHistoric(old => [...old, item].reverse());
          });
        })
    }

    loadList();
  }, [dateFilter])

  function handleDelete(item) {
    if (isPast(new Date(item.createdDate))) {
      alert('Impossivel excluir um registro passado!');
      return;
    }
    Alert.alert('Cuidado Atenção',
      `Você desejá excluir ${item.tipo} - valor: ${item.valor}`,
      [
        {
          text: 'Cancelar',
          styles: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => confirmDelete(item)
        }
      ],
    )
  }

  async function confirmDelete(item) {
    await firebase.database().ref('historic').child(uid).child(item.key).remove()
      .then(async () => {
        let saldoAtual = saldo;
        item.tipo === 'despesa' ? saldoAtual += parseFloat(item.valor) : saldoAtual -= parseFloat(item.valor);

        await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
      }).catch((err) => {
        console.log(err);
        alert('Ops... Algo deu errado.')
      });
  }

  function handleShowPicker() {
    setShowPicker(true);
  }

  function handleClosePicker() {
    setShowPicker(false);
  }

  async function onChangeDateFilter(date) {
    setShowPicker(Platform.OS === 'ios');
    setDateFilter(date);
  }

  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
      </Container>

      <Area>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon
            name="calendar"
            color="#FFF"
            size={30}
          />
        </TouchableOpacity>
        <Title>Últimas Movimentações</Title>
      </Area>

      <List
        showsVerticalScrollIndicator={false}
        data={historic}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricItem data={item} deleteItem={handleDelete} />)}
      />

      {showPicker && (
        <DatePicker
          onClose={handleClosePicker}
          date={dateFilter}
          onChange={onChangeDateFilter}
        />
      )}


    </Background >
  )
}

