import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StyledImage, StyledScrollView, StyledText, StyledTouchableOpacity, StyledView } from '../commons'
import { urlFor } from '../sanity.client'
import { ArrowLeftIcon, ChevronRightIcon, MapIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { IParams } from '../types'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const {
    params: { id, imgUrl, title, rating, address, short_description, dishes, long, lat },
  }: IParams = useRoute<any>()

  useEffect(() => {
    dispatch(
      setRestaurant({
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
    )
  }, [])

  return (
    <>
      <BasketIcon />
      <StyledScrollView>
        <StyledView className='relative'>
          <StyledImage
            className='w-full h-56 bg-gray-300 p-4'
            source={{
              uri: urlFor(imgUrl).url(),
            }}
          />
          <StyledTouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-200 rounded-full'>
            <ArrowLeftIcon size={20} />
          </StyledTouchableOpacity>
        </StyledView>

        <StyledView className='bg-white'>
          <StyledView className='px-4 pt-4'>
            <StyledText className='text-3xl font-bold'>{title}</StyledText>
            <StyledView className='flex-row space-x-2 my-1'>
              <StyledView className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <StyledText className='text-xs text-gray-500'>
                  <StyledText className='text-green-500'>{rating} ratings</StyledText>
                </StyledText>
              </StyledView>

              <StyledView className='flex-row items-center space-x-1'>
                <MapIcon color='gray' opacity={0.5} size={22} />
                <StyledText className='text-xs text-gray-500'>Nearby {address}</StyledText>
              </StyledView>
            </StyledView>
            <StyledText className='text-gray-500 mt-2 pb-4'>{short_description}</StyledText>
          </StyledView>

          <StyledTouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <StyledText className='pl-2 flex-1 text-md font-bold'>Have a good allergy?</StyledText>
            <ChevronRightIcon color='#00CCBB' />
          </StyledTouchableOpacity>
        </StyledView>

        <StyledView className='pb-36'>
          <StyledText className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</StyledText>

          {dishes?.map(dish => (
            <DishRow
              key={dish._id}
              name={dish.name}
              description={dish.short_description}
              id={dish._id}
              image={dish.image}
              price={dish.price}
            />
          ))}
        </StyledView>
      </StyledScrollView>
    </>
  )
}

export default RestaurantScreen
