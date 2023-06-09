import { useNavigation } from '@react-navigation/native'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledText, StyledView } from '../commons'
import { selectRestaurant } from '../slices/restaurantSlice'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const dispatch = useDispatch()

  return (
    <StyledView>
      <StyledText>BasketScreen</StyledText>
    </StyledView>
  )
}

export default BasketScreen
