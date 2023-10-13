import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const addToCartThunk = createAsyncThunk(
  'cart/addToCart',
  async (item, { getState }) => {
    const state = getState().cart;
    const isDuplicateIndex = state.cartItems.findIndex((i) => i.id === item.id);

    if (isDuplicateIndex === -1) {
      const updatedCart = [...state.cartItems, item];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

    } else {
      const updatedCart = [...state.cartItems];
      const existingItem = updatedCart[isDuplicateIndex];
      updatedCart[isDuplicateIndex] = {
        ...existingItem,
        qty: existingItem.qty + 1,
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    }
  }
);

export const removeFromCartThunk = createAsyncThunk(
  'cart/removeFromCart',
  async (id, { getState }) => {
    const state = getState().cart;
    const updatedCart = state.cartItems.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  }
);

export const addQtyItemThunk = createAsyncThunk(
  'cart/addQtyItem',
  async (item, { getState }) => {
    const state = getState().cart;
    const updatedCart = state.cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          qty: cartItem.qty + 1
        }
      }
      return cartItem
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  }
)

export const removeQtyItemThunk = createAsyncThunk(
  'cart/removeQtyItem',
  async (item, { getState }) => {
    const state = getState().cart;
    const updatedCart = state.cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        const newQty = Math.max(1, cartItem.qty - 1);

        return {
          ...cartItem,
          qty: newQty,
        }
      }
      return cartItem
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;

  }
)

export const clearCartThunk = createAsyncThunk(
  'cart/clearCart',
  async () => {
    localStorage.setItem('cart', JSON.stringify([]));
    return [];
  }
);

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart)
  } else {
    return []
  }
}

const calculateTotalQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.qty, 0);
};

const initialState = {
  cartItems: getLocalStorage(),
  allCartItems: calculateTotalQuantity(getLocalStorage())
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.allCartItems = action.payload.length;
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.allCartItems = action.payload.length;
      })
      .addCase(addQtyItemThunk.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.allCartItems = action.payload.length;
      })
      .addCase(removeQtyItemThunk.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.allCartItems = action.payload.length;
      })
      .addCase(clearCartThunk.fulfilled, (state) => {
        state.cartItems = [];
        state.allCartItems = 0;
      })
  }
})


export const { addToCart, removeFromCart, addQtyItem, removeQtyItem, clearCart } = cartSlice.actions

export default cartSlice.reducer