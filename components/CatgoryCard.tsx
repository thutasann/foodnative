import React from 'react'
import { StyledImage, StyledText, StyledTouchableOpacity } from '../commons'
import { urlFor } from '../sanity.client'
import { Image } from '../types'

interface ICategoryCard {
  imgUrl: Image
  title: string
}

const CatgoryCard: React.FC<ICategoryCard> = ({ imgUrl, title }) => {
  return (
    <StyledTouchableOpacity className='relative mr-2'>
      <StyledImage
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className='h-24 w-24 rounded'
      />
      <StyledText className='absolute bottom-1 left-1 text-white font-bold'>{title}</StyledText>
    </StyledTouchableOpacity>
  )
}

export default CatgoryCard
