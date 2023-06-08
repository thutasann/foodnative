import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'

const StyledText = styled(Text)

const HomeScreen = () => {
  return (
    <View>
      <StyledText className='text-red-500 bg-blue-300'>HomeScreen</StyledText>
    </View>
  )
}

export default HomeScreen
