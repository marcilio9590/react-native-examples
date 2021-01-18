import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valueSelected) => this.setState({ value: valueSelected })}
          value={this.state.value}
          minimumTrackTintColor='#00FF00'
          maximumTrackTintColor='#FF0000'

        />
        <Text style={{ textAlign: 'center', fontSize: 50 }}>
          {this.state.value.toFixed(1)}
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    marginTop: 20
  }
});