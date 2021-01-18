import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import { Container, IconView, Tipo, TipoText, ValorText } from './styles';

export default function HistoricItem({ data, deleteItem }) {



  return (
    <TouchableWithoutFeedback onLongPress={() => { deleteItem(data) }}>
      <Container>
        <Tipo>
          <IconView tipo={data.tipo}>
            <Icons
              name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
              color="#FFF"
              size={20}
            />
            <TipoText>{data.tipo}</TipoText>
          </IconView>
        </Tipo>
        <ValorText>R$ {data.valor}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  )
}