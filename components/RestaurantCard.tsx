import React from 'react'
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from '../commons'
import { StarIcon, MapIcon } from 'react-native-heroicons/outline'
import { Dish, Image } from '../types'
import { urlFor } from '../sanity.client'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

interface IRestaurantCard {
  id: string
  imgUrl: Image
  title: string
  rating: number
  address: string
  short_description: string
  dishes: Dish[]
  long: number
  lat: number
}

const RestaurantCard = ({ id, imgUrl, title, rating, address, short_description, dishes, long, lat }: IRestaurantCard) => {
  const navigation = useNavigation<any>()

  return (
    <StyledTouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }}
      className='bg-white mr-3 shadow-sm rounded-md'
    >
      <StyledImage
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className='h-36 w-64 rounded-md'
      />
      <StyledView className='px-3 py-4'>
        <StyledText className='font-bold text-lg pt-2'>{title}</StyledText>
        <StyledView className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <StyledText className='text-xs text-gray-500'>
            <StyledText>{rating}</StyledText>
          </StyledText>
        </StyledView>
        <StyledView className='flex-row items-center space-x-1'>
          <MapIcon color='gray' opacity={0.4} size={22} />
          <StyledText className='text-xs text-gray-500'>Nearby . {address}</StyledText>
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default RestaurantCard
