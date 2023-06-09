import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { StyledView } from '../commons'

const PreparingScreen = () => {
  const navigate = useNavigation<any>()

  useEffect(() => {
    setTimeout(() => {
      navigate.navigate('Delivery')
    }, 4000)
  }, [])

  return (
    <StyledView className='bg-[#00CCBB] flex-1 justify-center items-center px-3'>
      <Animatable.Image
        source={require('../assets/order.gif')}
        animation='slideInUp'
        iterationCount={1}
        // @ts-ignore
        className='h-96 w-96'
      />
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        // @ts-ignore
        className='text-[22em] my-10 text-white font-bold text-center'
      >
        Waiting for Restaurant to aaccept your order!
      </Animatable.Text>

      <Progress.Bar indeterminate={true} color='white' width={200} />
    </StyledView>
  )
}

export default PreparingScreen
