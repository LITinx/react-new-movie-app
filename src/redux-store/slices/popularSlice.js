import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	movies: [],
}

const popularSlice = createSlice({
	name: 'popular',
	initialState,
	reducers: {
		updatePopularMovies: (state, action) => {
			state.popularMovies.push(...action.payload)
		},
	},
})

export const { updatePopularMovies } = popularSlice.actions

export default popularSlice.reducer
