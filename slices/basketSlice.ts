import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: any, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state: any, action) => {
      const index = state.items.findIndex((item: any) => item.id === action.payload.id)

      let newBasket = [...state.items]

      if (index >= 0) {
        newBasket?.splice(index, 1)
      } else {
        console.warn(`Cannot Remove produt (id: ${action.payload.id}) as its not in basket!`)
      }

      state.items = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions
export default basketSlice.reducer

export const selectBasketItems = (state: any) => state.basket.items

export const selectBasketItemWithId = (state: any, id: string) => state.basket.items?.filter((item: any) => item.id === id)

export const selectBasketTotal = (state: any) => state.basket.items?.reduce((total: any, item: any) => (total += item.price), 0)

// I Know I need to implement with TypeScript
// but skip this part cauz I was lazy XD
