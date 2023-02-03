import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const STDButton = ({ value, onPress }) => {
  return (
    <TouchableOpacity 
      style={{ 
          backgroundColor: '#FF4500', 
          width: '100%', 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          borderRadius: '20px',
        }}
      onPress={onPress}
      >
       <Text style={{ color: 'white', fontSize: 30 }}>{ value }</Text>
    </TouchableOpacity>
  )
}

export default STDButton