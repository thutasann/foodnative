import React, { useState } from 'react'
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from '../commons'
import Currency from 'react-currency-formatter'
import { Image } from '../types'
import { urlFor } from '../sanity.client'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemWithId } from '../slices/basketSlice'

interface IDishRow {
  id: string
  name: string
  description: string
  price: number
  image: Image
}

const DishRow = ({ id, name, description, price, image }: IDishRow) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const dispatch = useDispatch()
  const items: any[] = useSelector(state => selectBasketItemWithId(state, id))

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        image,
      })
    )
  }

  const removeItem = () => {
    if (!items?.length) return
    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
      <StyledTouchableOpacity
        onPressOut={() => setIsPressed(!isPressed)}
        className={`bg-white border border-gray-100 p-4 ${isPressed && 'border-b-0'}`}
      >
        <StyledView className='flex-row'>
          <StyledView className='flex-1 pr-2'>
            <StyledText className='text-lg mb-1'>{name}</StyledText>
            <StyledText className='text-gray-400'>{description}</StyledText>
            <StyledText>
              <Currency quantity={price} currency='USD' />
            </StyledText>
          </StyledView>

          <StyledView>
            <StyledImage
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              className='h-20 w-20 bg-gray-300 p-4'
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </StyledView>
        </StyledView>
      </StyledTouchableOpacity>

      {isPressed && (
        <StyledView className='bg-white px-4'>
          <StyledView className='flex-row items-center space-x-2 pt-1 pb-3'>
            <StyledTouchableOpacity disabled={!items?.length} onPress={removeItem}>
              <MinusCircleIcon color={items.length > 0 ? '#00CCBB' : 'gray'} size={40} />
            </StyledTouchableOpacity>
            <StyledText>{items?.length}</StyledText>
            <StyledTouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color='#00CCBB' size={40} />
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      )}
    </>
  )
}

export default DishRow
