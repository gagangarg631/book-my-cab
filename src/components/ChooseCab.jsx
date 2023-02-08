import MaterialCmtyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Image, Text, StyleSheet } from 'react-native'
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Cars from '../../CarsAvailable';
import Car from './Car';
import IncDecButton from './IncDecButton';
import BlackButton from './BlackButton';

const ChooseCab = () => {
  const [index, setIndex] = useState(0);
  const [passengerCount, setPassengerCount] = useState(1);
  const [amount, setAmount] = useState(250);

  const handleSelect = (selectedIndex) => {
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
      <View style={styles.info}>
          <View style={styles.individualInfoBox}>
            <MaterialCmtyIcons name="map-marker-distance" size={60} />
            <Text style={{ fontSize: 20}}>21 km</Text>
          </View>
          <View style={styles.individualInfoBox}>
            <IonIcons name="person" size={60} />
            <View style={{ height: 20, width: 100 }}>
              <IncDecButton count={passengerCount} setCount={(count) => setPassengerCount(count)} />
            </View>
          </View>
          <View style={styles.individualInfoBox}>
            <MaterialIcons name="attach-money" size={60} />
            <Text style={{ fontSize: 20}}>{ amount }</Text>
          </View>
      </View>
      <View style={styles.btns}>
        <View style={{ flex: 1 }}>
          <BlackButton value="<-" />
        </View>
        <View style={{ flex: 4 }}>
          <BlackButton value="Request a trip" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    height: '30%', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
  },

  individualInfoBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },

  btns: {
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})

export default ChooseCab