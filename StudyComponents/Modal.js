import React, { Component } from 'react';
import { View, StyleSheet, Button, Modal, Text } from 'react-native';
import ModalBody from './src/components/ModalBody';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ modalVisible: false })
  }

  open() {
    this.setState({ modalVisible: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={this.open} />

        <Modal visible={this.state.modalVisible} animationType="slide" transparent={true}>
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ModalBody close={this.close} />
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  }
});