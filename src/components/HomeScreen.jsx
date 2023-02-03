import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ChooseLocation from './ChooseLocation'
import STDButton from './STDButton';

const HomeScreen = ({ navigation }) => {
    const [component, setComponent] = useState(<ChooseLocation navigation={navigation} />)
  return (
    <View>
        { component }
    </View>
  )
}

export default HomeScreen