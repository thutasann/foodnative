import { useNavigation } from '@react-navigation/native'
import React, { useMemo, useState } from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from 'react-redux'
import { StyledImage, StyledSafeAreaView, StyledScrollView, StyledText, StyledTouchableOpacity, StyledView } from '../commons'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { selectRestaurant } from '../slices/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity.client'

const BasketScreen = () => {
  const navigation = useNavigation<any>()
  const restaurant = useSelector(selectRestaurant)
  const dispatch = useDispatch()
  const basketTotal = useSelector(selectBasketTotal)
  const items: any[] = useSelector(selectBasketItems)
  const [grouptedItemsInBasket, setGrouptedItemsInBasket] = useState([])

  useMemo(() => {
    const groupedItems = items?.reduce((results: any[], item: any) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setGrouptedItemsInBasket(groupedItems)
  }, [items])

  return (
    <StyledSafeAreaView className='flex-1 bg-white'>
      <StyledView className='flex-1 bg-gray-100'>
        <StyledView className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <StyledView>
            <StyledText className='text-lg font-bold text-center'>Baskset</StyledText>
            <StyledText className='text-center text-gray-400'>{restaurant.title}</StyledText>
          </StyledView>

          <StyledTouchableOpacity onPress={navigation.goBack} className='rounded-full bg-gray-100 absolute top-3 right-5'>
            <XCircleIcon color='#00CCBB' height={50} width={50} />
          </StyledTouchableOpacity>
        </StyledView>

        <StyledView className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <StyledImage
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/023/354/823/original/delivery-man-ride-scooter-motorcycle-cartoon-png.png',
            }}
            className='w-7 h-7 bg-gray-300 p-4 rounded-full'
          />
          <StyledText className='flex-1'>Deliver in 50 - 75 min</StyledText>
          <StyledTouchableOpacity>
            <StyledText className='text-[#00CCBB]'>Change</StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        <StyledScrollView className='divide-y divide-gray-200'>
          {Object.entries<any>(grouptedItemsInBasket).map(([key, items]) => (
            <StyledView key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <StyledText>{items?.length} x</StyledText>
              <StyledImage
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className='h-12 w-12 rounded-full'
              />
              <StyledText className='flex-1'>{items[0]?.name}</StyledText>

              <StyledText className='text-gray-600'>
                <Currency quantity={items[0]?.price} currency='USD' />
              </StyledText>

              <StyledTouchableOpacity>
                <StyledText onPress={() => dispatch(removeFromBasket({ id: key }))} className='text-[#00CCBB] text-xs'>
                  Remove
                </StyledText>
              </StyledTouchableOpacity>
            </StyledView>
          ))}
        </StyledScrollView>

        <StyledView className='p-5  bg-white mt-5 space-y-4'>
          <StyledView className='flex-row justify-between'>
            <StyledText className='text-gray-400'>Subtotal</StyledText>
            <StyledText className='text-gray-400'>
              <Currency quantity={basketTotal} currency='USD' />
            </StyledText>
          </StyledView>

          <StyledView className='flex-row justify-between'>
            <StyledText className='text-gray-400'>Delivery Fee</StyledText>
            <StyledText className='text-gray-400'>
              <Currency quantity={5.99} currency='USD' />
            </StyledText>
          </StyledView>

          <StyledView className='flex-row justify-between'>
            <StyledText>Order Total</StyledText>
            <StyledText className='font-extrabold'>
              <Currency quantity={basketTotal + 5.99} currency='USD' />
            </StyledText>
          </StyledView>

          <StyledTouchableOpacity onPress={() => navigation.navigate('Preparing')} className='rounded-lg bg-[#00CCBB] p-4'>
            <StyledText className='text-center text-white text-lg font-bold'>Place order</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledSafeAreaView>
  )
}

export default BasketScreen
