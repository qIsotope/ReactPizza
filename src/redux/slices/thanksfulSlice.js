import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isThanksful: false,
}

export const thanksfulSlice = createSlice({
	name: 'thanksful',
	initialState,
	reducers: {
		openThanksful(state) {
			state.isThanksful = true
		},
		closeThanksful(state) {
			state.isThanksful = false
		}
	},


})

export const { closeThanksful, openThanksful } = thanksfulSlice.actions

export default thanksfulSlice.reducer