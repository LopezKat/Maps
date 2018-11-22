import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import axios from 'axios';
const mapStyle = require ('./src/map-style.json');

const { width, height } = Dimensions;
const latlng = {
  latitude: 6.2274477,
  longitude: -75.5862941
};

export default class App extends Component {

  state = {
    points: []
  };

  componentDidMount() {
    this.getPointsService();
  }

  async getPointsService() {
    try {
      const data = await axios.get('http://shoppingproducts.herokuapp.com/cinemas')
      this.setState({
        points: data.data
      });
      console.log('Points ', this.state.points)
    } catch (err) {
      console.log(err);
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 6.2686734,
            longitude: -75.666432,
            latitudeDelta: 1.015,
            longitudeDelta: 0.0121,
          }}

          customMapStyle = { mapStyle }
        >
          {
            this.state.points.map((cinema) => (
              cinema.locationsList.map((place, key) => {
                let point = { latitude: place.location.coordinates[1], 
                              longitude: place.location.coordinates[0] 
                };
                console.log('each point ', point);
              return (
                <Marker
                  key = { key }
                  coordinate={ point }
                  title={ place.name }
                  description={ cinema.name }
                  image = { require('./assets/ubicacion.png') }
                />
              )
            })
          ))
        }

        </MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
