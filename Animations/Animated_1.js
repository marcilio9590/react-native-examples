// Animated.timing(
//   this.state.animationWidth,
//   {
//     toValue: 300,
//     duration: 2000
//   }
// ).start();

// Animated.sequence([
//   Animated.timing(
//     this.state.animationOpacity,
//     {
//       toValue: 1,
//       duration: 1500
//     }
//   ),
//   Animated.parallel([
//     Animated.timing(
//       this.state.animationWidth,
//       {
//         toValue: 300,
//         duration: 1000
//       }
//     ),
//     Animated.timing(
//       this.state.animationHeight,
//       {
//         toValue: 200,
//         duration: 1000
//       }
//     )
//   ]),
//   Animated.timing(
//     this.state.animationOpacity,
//     {
//       toValue: 0,
//       duration: 3000
//     }
//   )
// ]).start();

// Animated.parallel([
//   Animated.timing(
//     this.state.animationWidth,
//     {
//       toValue: 300,
//       duration: 2000
//     }
//   ),
//   Animated.timing(
//     this.state.animationHeight,
//     {
//       toValue: 150,
//       duration: 2000
//     }
//   ),
//   Animated.timing(
//     this.state.animationOpacity,
//     {
//       toValue: 0.5,
//       duration: 2000
//     }
//   )
// ]).start();


// Animated.loop(
//   Animated.sequence([
//     Animated.timing(
//       this.state.animationWidth,
//       {
//         toValue: 300,
//         duration: 700,
//         useNativeDriver: false
//       }
//     ),
//     Animated.timing(
//       this.state.animationWidth,
//       {
//         toValue: 150,
//         duration: 700,
//         useNativeDriver: false
//       }
//     )
//   ])
// ).start();

import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animationWidth: new Animated.Value(150),
      animationHeight: new Animated.Value(35),
      opAnimada: new Animated.Value(0)
    };
    this.carregar = this.carregar.bind(this);


  }

  carregar() {
    Animated.parallel([
      Animated.sequence(
        this.state.opAnimada,
        {
          toValue: 1,
          duration: 400,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        this.state.animationHeight,
        {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false
        }
      ),
    ]).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>


        <View style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#4169E1'
        }}>
          <TouchableOpacity onPress={this.carregar}>
            <Text style={{ fontSize: 25, color: '#FFF' }}>Gerar Grafico</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text>Vendas</Text>
          <Animated.View style={{
            width: this.state.animationWidth,
            height: this.state.animationHeight,
            opacity: this.state.opAnimada,
            backgroundColor: '#FF0000',
            justifyContent: 'center'
          }}>
            <Text style={{
              color: '#FFF',
              fontSize: 22,
              textAlign: 'center'
            }}>R$ 150,00</Text>
          </Animated.View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});