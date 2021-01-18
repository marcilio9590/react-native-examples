import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// class App extends Component {
//   render() {

//     let nome = 'Marcilio';

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Olá Mundo</Text>
//         <Text style={{ color: '#acc000', fontSize: 25 }}>
//           Vamo de BIKE
//           </Text>
//         <Text>{nome}</Text>
//         <Img largura={300} altura={300} nome='Fulano' />
//       </View>
//     );
//   }
// }

// class Img extends Component {
//   render() {
//     let image = 'https://www.dclick.com.br/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
//     return (
//       <View>
//         <Image
//           source={{ uri: image }}
//           style={{ width: this.props.largura, height: this.props.altura, borderRadius: 100, marginTop: 10 }}
//         />
//         <Text>{this.props.nome}</Text>
//       </View>
//     );
//   }
// }

// export default App;

// export default class App extends Component {

// constructor(props) {
//   super(props);
//   this.state = {
//     nome: 'Marcilio'
//   };
//   this.entrar = this.entrar.bind(this);
// }

// entrar(name) {
//   this.setState({
//     nome: name
//   });
// }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.subView}></View>
//         <View style={styles.subView2}></View>
//         <View style={styles.subView3}></View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#222',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   subView: {
//     height: 50,
//     width: 50,
//     backgroundColor: 'red'
//   },
//   subView2: {
//     backgroundColor: 'green',
//     height: 50,
//     width: 50
//   },
//   subView3: {
//     backgroundColor: 'yellow',
//     height: 50,
//     width: 50
//   }
// });

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      input: ''
    }
    this.show = this.show.bind(this);
  }

  show() {
    if (this.state.input.length == 0) {
      alert('Digite seu nome!');
      this.setState({ name: '' })
      return;
    }
    this.setState({ name: 'Bem Vindo: ' + this.state.input })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({ input: text })}
        />
        <Text style={styles.texto}>{this.state.name}</Text>
        <Button title="Exibir Texto" onPress={this.show} />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
});