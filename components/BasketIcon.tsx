import React from 'react'
import Currency from 'react-currency-formatter'
import { useSelector } from 'react-redux'
import { Text } from 'react-native'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { StyledText, StyledTouchableOpacity, StyledView } from '../commons'

const BasketIcon = () => {
  const items: any[] = useSelector(selectBasketItems)
  const navigation = useNavigation<any>()
  const basketTotal = useSelector(selectBasketTotal)

  if (items?.length === 0) return null

  return (
    <StyledView className='absolute bottom-10 w-full z-50'>
      <Text className=''>ok</Text>
      <StyledTouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className='mx-5 bg-[#00CCBB] shadow-md p-4 rounded-lg flex-row items-center space-x-1'
      >
        <StyledText className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items?.length}</StyledText>
        <StyledText className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</StyledText>
        <StyledText className='text-lg text-white font-extrabold'>
          <Currency quantity={basketTotal} currency='USD' />
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  )
}

export default BasketIcon
