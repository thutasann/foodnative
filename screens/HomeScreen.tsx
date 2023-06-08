import React from 'react'
import { StyledImage, StyledSafeAreaView, StyledScrollView, StyledText, StyledTextInput, StyledView } from '../commons'
import Header from '../components/Header'
import Search from '../components/Search'

const HomeScreen = () => {
  return (
    <StyledSafeAreaView className='bg-white p-5'>
      <Header />
      <Search />
      <StyledScrollView></StyledScrollView>
    </StyledSafeAreaView>
  )
}

export default HomeScreen
