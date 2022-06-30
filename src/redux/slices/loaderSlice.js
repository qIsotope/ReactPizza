import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoader: false,
}

export const loaderSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		showLoader(state) {
			state.isLoader = true
		},
		hideLoader(state) {
			state.isLoader = false
		}
	},


})

export const { showLoader, hideLoader } = loaderSlice.actions

export default loaderSlice.reducer