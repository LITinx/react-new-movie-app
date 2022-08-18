import { configureStore } from '@reduxjs/toolkit'
import popularSlice from './slices/popularSlice'

export const store = configureStore({
	reducer: {
		popular: popularSlice,
	},
})
