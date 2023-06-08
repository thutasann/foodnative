import { Reference } from 'sanity'

type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Image {
  _ref: string
  _type: 'reference'
}

// Category
export interface Category extends Base {
  name: string
  image: Image
}

// Dish
export interface Dish extends Base {
  name: string
  short_description: string
  price: number
  image: Image
}

// Restaurants
export interface Restaurants extends Base {
  name: string
  short_description: string
  image: Image
  lat: number
  long: number
  address: string
  rating: number
  category: Category[]
  dishes: Dish[]
}

// Featured
export interface Featured extends Base {
  name: string
  short_description: string
  image: Image
  restaurants: Restaurants[]
}
