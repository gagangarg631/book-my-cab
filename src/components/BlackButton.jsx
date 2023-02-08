import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BlackButton = ({ value }) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{ value }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25
    }
})

export default BlackButton;