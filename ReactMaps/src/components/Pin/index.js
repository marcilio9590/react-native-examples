import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

export default function Pin({ marker }) {
  return (
    <Marker
      coordinate={marker.coords}
      key={marker.key}
      // image={marker.image}
      pinColor={marker.pinColor}
    >
      <View style={[styles.viewMarker, { backgroundColor: marker.pinColor }]}>
        <Text style={styles.textoMarker}>{marker.aviso}</Text>
      </View>
      <Callout tooltip={true}>
        <View style={styles.viewCallout}>
          <Text style={{ fontSize: 18 }}>Olá Mundo</Text>
        </View>
      </Callout>
    </Marker>
  )
}

const styles = StyleSheet.create({
  viewMarker: {
    height: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textoMarker: {
    color: '#000'
  },
  viewCallout: {
    backgroundColor: '#DDD',
    width: 200,
    height: 150
  }
})
