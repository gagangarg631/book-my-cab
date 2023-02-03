import MaterialCmtyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Image, Text, StyleSheet } from 'react-native'
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Cars from '../../CarsAvailable';
import Car from './Car';
import IncDecButton from './IncDecButton';

const ChooseCab = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <View style={{ height: '100%' }}>
      <View style={{ height: '45%' }}>
        <Carousel style={{ 
          height: '100%',
          backgroundColor: '#C5C5C5'
          }} activeIndex={index} onSelect={handleSelect}>
          {
            Cars.map((item, index) => (
              <Carousel.Item key={index} style={{
                marginTop: '30px'
              }}>
                <View style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  gap: 10,
                  height: '80%',
                }}>
                  <Image
                  source={{ uri: item.img }}
                  style={{ height: '200px', width: '60%', borderRadius: 30, }} />
                  <Text style={{ fontSize: 25, fontWeight: 500 }}>Bolero SLX</Text>
                </View>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </View>
      <View style={{ height: '40%', borderWidth: 1, display: 'flex', flexDirection: 'row' }}>
          <View style={styles.individualInfoBox}>
            <MaterialCmtyIcons name="map-marker-distance" size={60} />
            <Text>21 km</Text>
          </View>
          <View style={styles.individualInfoBox}>
            <IonIcons name="person" size={60} />
            <View style={{ height: 60, width: 100 }}>
              <IncDecButton />
            </View>
          </View>
          <View style={styles.individualInfoBox}>
            <MaterialIcons name="attach-money" size={60} />
            <Text>21 km</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  individualInfoBox: {
    borderWidth: 1, 
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  }
})

export default ChooseCab