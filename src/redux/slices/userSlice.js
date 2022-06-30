import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
	token: null,
	id: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			console.log(action.payload)
			state.email = action.payload.email
			state.token = action.payload.token
			state.id = action.payload.id
		},
		removeUser(state) {
			state.email = null
			state.token = null
			state.id = null
		}
	},


})

export const { removeUser, setUser } = userSlice.actions

export default userSlice.reducer