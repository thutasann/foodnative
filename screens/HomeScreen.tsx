import React from 'react'
import { StyledSafeAreaView, StyledScrollView } from '../commons'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Search from '../components/Search'

const HomeScreen = () => {
  return (
    <StyledSafeAreaView className='bg-white p-5 flex-col'>
      <Header />
      <Search />
      <StyledScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
      </StyledScrollView>
    </StyledSafeAreaView>
  )
}

export default HomeScreen
