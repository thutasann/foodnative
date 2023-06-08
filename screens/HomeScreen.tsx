import React from 'react'
import { StyledSafeAreaView, StyledScrollView } from '../commons'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import Header from '../components/Header'
import Search from '../components/Search'

const HomeScreen = () => {
  return (
    <StyledSafeAreaView className='bg-white p-5 flex-col px-2'>
      <Header />
      <Search />

      <StyledScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        <FeaturedRow id='123' title='Featured' description='Paid placements from our partners' featuredCategory='Burger' />
        <FeaturedRow id='1234' title='Featured' description='Paid placements from our partners' featuredCategory='Burger' />
        <FeaturedRow id='1235' title='Featured' description='Paid placements from our partners' featuredCategory='Burger' />
      </StyledScrollView>
    </StyledSafeAreaView>
  )
}

export default HomeScreen
