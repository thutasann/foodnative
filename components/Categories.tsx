import React, { useState, useEffect } from 'react'
import { StyledScrollView } from '../commons'
import { Category } from '../types'
import sanityClient from '../sanity.client'

import CatgoryCard from './CatgoryCard'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
         *[_type == "category"]
        `
      )
      .then(data => {
        setCategories(data)
      })
  }, [])

  return (
    <StyledScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map(cate => (
        <CatgoryCard key={cate._id} imgUrl={cate.image} title={cate.name} />
      ))}
    </StyledScrollView>
  )
}

export default Categories
