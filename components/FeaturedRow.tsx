import React from 'react'
import { StyledScrollView, StyledText, StyledView } from '../commons'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

interface IFeaturedRow {
  id: string
  title: string
  description: string
  featuredCategory: string
}

const FeaturedRow = ({ id, title, description, featuredCategory }: IFeaturedRow) => {
  return (
    <StyledView>
      <StyledView className='mt-4 flex-row items-center justify-between px-4'>
        <StyledText className='font-bold text-lg'>{title}</StyledText>
        <ArrowRightIcon color='#00CCBB' />
      </StyledView>
      <StyledText className='text-xs text-gray-500 px-4'>{description}</StyledText>

      <StyledScrollView
        className='pt-4'
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4, 5].map(idx => (
          <RestaurantCard
            key={idx}
            id={'123'}
            imgUrl={'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg'}
            title={'Yo! Shushi!'}
            rating={4.5}
            genre={'Japanese'}
            address={'1234 Main St'}
            short_description={'This is a Test Description'}
            dishes={[]}
            long={20}
            lat={0}
          />
        ))}
      </StyledScrollView>
    </StyledView>
  )
}

export default FeaturedRow
