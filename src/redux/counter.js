import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    isNavbarOpen: (state,action) => {
      state.value  = action.payload
    },
  },
})

export const { isNavbarOpen } = navbarSlice.actions

export default navbarSlice.reducer