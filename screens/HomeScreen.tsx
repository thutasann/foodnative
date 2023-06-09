import React, { useState, useEffect } from 'react'
import { StyledSafeAreaView, StyledScrollView } from '../commons'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import Header from '../components/Header'
import Search from '../components/Search'
import { Featured } from '../types'
import sanityClient from '../sanity.client'
import axios from 'axios'

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState<Featured[]>([])

  const [posts, setPosts] = useState([])
  console.log(posts)

  useEffect(() => {
    axios
      .get('https://thisquarterly.sg/wp-json/wp/v2/posts')
      .then(response => {
        setPosts(response.data)
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error)
      })
  }, [])

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"]{
            ...,
            restaurants[] -> {
              ...,
              dishes[] ->
            }
          }
        `
      )
      .then(data => {
        setFeaturedCategories(data)
      })
  }, [])

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

        {featuredCategories?.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory=''
          />
        ))}
      </StyledScrollView>
    </StyledSafeAreaView>
  )
}

export default HomeScreen
