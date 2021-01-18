import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      larAnimated: new Animated.Value(0)
    }

    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.larAnimated,
          {
            toValue: 100,
            duration: 2000,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          this.state.larAnimated,
          {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
          }
        )
      ])
    ).start();
  }

  render() {

    let percent = this.state.larAnimated.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor: '#4169E1',
          width: percent,
          height: 25
        }}>


        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});