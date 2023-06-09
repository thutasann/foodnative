import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { selectRestaurant } from '../slices/restaurantSlice'
import { StyledImage, StyledSafeAreaView, StyledText, StyledTouchableOpacity, StyledView } from '../commons'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

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

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        // @ts-ignore
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>
      <StyledSafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <StyledImage
          source={{
            uri: 'https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg',
          }}
          className='h-12 w-12 ml-5 p-4 rounded-full'
        />
        <StyledView className='flex-1'>
          <StyledText className='text-lg'>James Ganar</StyledText>
          <StyledText className='text-gray-400'>Your Rider</StyledText>
        </StyledView>

        <StyledText className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</StyledText>
      </StyledSafeAreaView>
    </StyledView>
  )
}

export default DeliveryScreen
