import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "./store"
import {
  KeyValueShape,
  PWAShape,
} from "../@listingslab/types"

const initialState: PWAShape = {
  title: "Listingslab AI",
  description: "A very intelligent PWA",
  started: false,
  loading: false,
  theme: {
    mode: "dark",
    primary: "#265874",
    secondary: "#489FD8",
  },
}

export const pwaSlice = createSlice({
  name: 'pwa',
  initialState,
  reducers: {
    setPWAKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state.pwa
export const { setPWAKey } = pwaSlice.actions 
export default pwaSlice.reducer
