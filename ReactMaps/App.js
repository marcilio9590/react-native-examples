import Geolocation from '@react-native-community/geolocation';
import React, { cloneElement, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { getPixel } from './src/utils/utils';

export default function App() {

  Geolocation.setRNConfiguration({ timeout: 3000, maximumAge: 2000, enableHighAccuracy: true });
  const [region, setRegion] = useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        await Geolocation.getCurrentPosition(location => {
          const { latitude, longitude } = location.coords;
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0015,
            longitudeDelta: 0.0121,
          });
        });
      } catch (error) {
        console.log(error);
      }
    }

    getCurrentLocation();
  }, []);

  function changeLocation(region) {
    setRegion(region);
  }

  function onMapClick(event) {
    setRegion({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={(map) => { setMapRef(map) }}
        minZoomLevel={16}
        onPress={onMapClick}
        onRegionChangeComplete={changeLocation}
        style={styles.map}
        region={region}
        showsUserLocation
        loadingEnabled
      >

        {destino &&
          (
            <MapViewDirections
              origin={region}
              destination={destino}
              apikey="GOOGLECLOUDKEY"
              strokeWidth={5}
              strokeColor="#000"
              onReady={result => {
                mapRef.fitToCoodinates(result.coordinates, {
                  edgePadding: {
                    right: getPixel(50),
                    left: getPixel(50),
                    top: getPixel(50),
                    bottom: getPixel(50)
                  }
                })
              }}
            />
          )
        }

      </MapView>
      {/* -7.9383233,-34.8797679 */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localText}>MC Donalds</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn} onPress={() => setDestino({
            latitude: -7.9383233,
            longitude: -34.8797679
          })}>
            <Text style={styles.localText}>Shopping NorthWay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn} onPress={() => setDestino({
            latitude: -7.9930636,
            longitude: -34.8415493
          })}>
            <Text style={styles.localText}>Shopping Pateo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localText}>Shopping Tacaruna</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localText}>Shopping RIOMAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  box: {
    position: 'absolute',
    top: 30,
    margin: 10,
    height: 70
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  localBtn: {
    backgroundColor: '#ff0000',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  localText: {
    color: '#FFF'
  }
})
