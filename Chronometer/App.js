import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      buttonText: 'Iniciar',
      lastTime: null
    }
    this.interval = null;
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 })
      }, 100);
      this.setState({ buttonText: 'Pausar' })
    } else {
      clearInterval(this.interval);
      this.interval = null;
      this.setState({ buttonText: 'Iniciar' })
    }
  }

  reset() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState({ lastTime: this.state.number, number: 0, buttonText: 'Iniciar' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('./src/assets/cronometro.png')}
        />
        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={this.start}>
            <Text style={styles.textButton}>{this.state.buttonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.reset}>
            <Text style={styles.textButton}>Resetar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastTimeArea}>
          <Text style={styles.lastText}>
            {
              this.state.lastTime > 0 ? 'Último tempo: ' + this.state.lastTime.toFixed(1) + 's' : ''
            }
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    marginTop: -156,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  lastTimeArea: {
    marginTop: 50
  },
  lastText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});