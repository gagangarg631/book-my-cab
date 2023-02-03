import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const IncDecButton = ({ max }) => {
    const [count, setCount] = useState(1);
  return (
    <View style={{
        height: '100%',
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'orange'
    }}>
      <TouchableOpacity style={styles.btns} onPress={() => setCount(prevCount => prevCount===1 ? prevCount : prevCount-1)}><Text>-</Text></TouchableOpacity>
      <Text style={styles.text}>{ count }</Text>
      <TouchableOpacity style={styles.btns} onPress={() => setCount(prevCount => prevCount===max ? prevCount : prevCount+1)}><Text>+</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btns: {
        flex: 1,
        fontSize: 40,
        fontWeight: 'bold'
    },
    text: {
        flex: 1
    }
})

export default IncDecButton