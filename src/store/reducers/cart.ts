import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  cartItems: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  cartItems: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.cartItems.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
    clear: (state) => {
      state.cartItems = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
