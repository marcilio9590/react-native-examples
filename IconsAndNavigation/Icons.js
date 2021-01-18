import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function IconsAndNavigation() {
  return (
    <View style={styles.container}>
      <Text>Marcilio Cobel</Text>

      <View style={{ flexDirection: 'row' }}>
        <FontAwesome
          name="home"
          size={35}
          color="#11118C"
        />

        <FontAwesome
          name="user"
          size={35}
          color="#11118C"
        />

        <Feather
          name="home"
          size={35}
          color="#FF0000"
        />

        <Feather
          name="user"
          size={35}
          color="#FF0000"
        />
      </View>


      <TouchableOpacity style={styles.btn}>
        <FontAwesome
          name="youtube"
          size={25}
          color="#FFF"
        />
        <Text style={styles.btnText}>Acessar Canal</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#FF0000',
    borderRadius: 5
  },
  btnText: {
    paddingLeft: 10,
    color: '#FFF'
  }
});