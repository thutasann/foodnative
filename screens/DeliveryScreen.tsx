import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { selectRestaurant } from '../slices/restaurantSlice'
import { StyledImage, StyledSafeAreaView, StyledText, StyledTouchableOpacity, StyledView } from '../commons'
import * as Progress from 'react-native-progress'

const DeliveryScreen = () => {
  const navigation = useNavigation<any>()
  const restaurant = useSelector(selectRestaurant)

  return (
    <StyledView className='bg-[#00CCBB] flex-1'>
      <StyledSafeAreaView className='z-50'>
        <StyledView className='flex-row justify-between items-center p-5'>
          <StyledTouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XCircleIcon color='white' size={30} />
          </StyledTouchableOpacity>
          <StyledText className='text-lg text-white font-semibold'>Order Help</StyledText>
        </StyledView>

        <StyledView className='bg-white mx-5 py-2 rounded-md p-6 z-50 shadow-md'>
          <StyledView className='flex-row items-center justify-between'>
            <StyledView>
              <StyledText className='text-lg text-gray-400'>Estimated Arrival</StyledText>
              <StyledText className='text-3xl font-bold'>45-55 Arrival</StyledText>
            </StyledView>
            <StyledImage
              source={{
                uri: 'https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-food-delivery-bike-courier-concept-png-image_6566814.png',
              }}
              className='h-20 w-20'
            />
          </StyledView>
          <Progress.Bar width={200} color='#00CCBB' indeterminate={true} />

          <StyledText className='mt-3 text-gray-500'>Your order at {restaurant.title} is being prepared.</StyledText>
        </StyledView>
      </StyledSafeAreaView>
    </StyledView>
  )
}

export default DeliveryScreen
