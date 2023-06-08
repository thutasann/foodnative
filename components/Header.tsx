import React from 'react'
import { StyledImage, StyledText, StyledView } from '../commons'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

function Header() {
  return (
    <StyledView className='flex-row pb-3 items-center mx-4 space-x-2 px-2'>
      <StyledImage
        source={{
          uri: 'https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg',
        }}
        className='h-7 w-7 bg-grary-300 p-4 rounded-full'
      />
      <StyledView className='flex-1'>
        <StyledText className='font-bold text-gray-400 text-xs'>Deliver Now!</StyledText>
        <StyledText className='font-bold text-xl'>
          Current Location
          <ChevronDownIcon size={20} color='#00CCBB' />
        </StyledText>
      </StyledView>
      <UserIcon size={35} color='#00CCBB' />
    </StyledView>
  )
}

export default Header
