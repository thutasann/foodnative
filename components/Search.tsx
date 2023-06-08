import React from 'react'
import { StyledTextInput, StyledView } from '../commons'
import { MagnifyingGlassCircleIcon as SearchIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'

const Search = () => {
  return (
    <StyledView>
      <StyledView className='flex-row items-center space-x-2 pb-2 mx-4'>
        <StyledView className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <SearchIcon color='gray' size={20} />
          <StyledTextInput placeholder='Restaurants and cusines' keyboardType='default' />
        </StyledView>
        <AdjustmentsHorizontalIcon color='#00CCBB' />
      </StyledView>
    </StyledView>
  )
}

export default Search
