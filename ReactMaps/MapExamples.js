import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Pin from './src/components/Pin';

//Evento executado quando o mapa é totalmente carregado
// onMapReady={() => { }}
//Evento chamado quando o mapa for movido e o dedo for removida da tela do celular
// onRegionChangeComplete={changeLocation}
//Evento CHamado quando houve um clique no mapada
// onPress={onMapClick}
//Tipos de mapa
// mapType="standard | satellite | terrain | hybrid"
// scrollEnabled={false}
// zoomEnabled={false}
// rotateEnabled={false}
// showsTraffic={true}

export default function App() {

  Geolocation.setRNConfiguration({ timeout: 3000, maximumAge: 2000 });
  const [region, setRegion] = useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [markers, setMarkers] = useState([
    { key: 0, aviso: 'Pegando Fogo', coords: { latitude: -7.9440814, longitude: -34.862814 }, pinColor: '#FF0000' },
    { key: 1, aviso: 'Mais ou Menos', coords: { latitude: -7.9443883, longitude: -34.8621358 }, pinColor: '#FC1' },
    { key: 2, aviso: 'DE Boas', coords: { latitude: -7.9467059, longitude: -34.86247 }, pinColor: '#FF0' },
  ])

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

  function mudarCidade(latitude, longitude) {
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

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
    // newMarker(event);
  }

  function newMarker(event) {
    let marq = {
      key: markers.length,
      coords: {
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
      }
    };
    setMarkers((old) => [...old, marq]);
  }

  return (
    <View style={styles.container}>
      <Text>{region && region.latitude} | {region && region.longitude}</Text>
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
        {/* <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }}
          pinColor={"#FF0000"}
          title="Minha Rua"
          description="Esta é a minha rua"
        /> */}

        {
          markers.map((item) => {
            return (
              <Pin marker={item} />
            );
          })
        }

      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  map: {
    width: '100%',
    height: 550,
    marginTop: 15
  }
})
