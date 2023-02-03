import { View, Text, Image } from 'react-native'
import React from 'react'

const Car = ({ car }) => {
    console.log(car.img)
  return (
    <View>
        <Image
        style={{
            height: '200px',
            width: '300px',
            borderWidth: 1
        }}
        source={{
            uri: car.img
        }} />
      <Text>Car</Text>
    </View>
  )
}

export default Car