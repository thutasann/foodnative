import React, { useEffect, useState } from 'react'
import { StyledScrollView, StyledText, StyledView } from '../commons'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient, { urlFor } from '../sanity.client'
import { Featured, Restaurants } from '../types'

interface IFeaturedRow {
  id: string
  title: string
  description: string
  featuredCategory: string
}

const FeaturedRow = ({ id, title, description }: IFeaturedRow) => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
            ...,
          restaurants[] -> {
            ...,
            dishes[] ->,
            type -> {
              name
            }
          }
      }[0]
    `,
        { id }
      )
      .then((data: Featured) => {
        setRestaurants(data?.restaurants)
      })
  }, [])

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
        {restaurants?.map((restaurant, idx) => (
          <RestaurantCard
            key={idx}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </StyledScrollView>
    </StyledView>
  )
}

export default FeaturedRow
