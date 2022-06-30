import { configureStore } from '@reduxjs/toolkit'
import filter from '../slices/filterSlice'
import pizza from '../slices/pizzaSlice'
import thanksful from '../slices/thanksfulSlice'
import user from '../slices/userSlice'
import loader from '../slices/loaderSlice'

export const store = configureStore({
	reducer: {
		filter,
		pizza,
		thanksful,
		user,
		loader,
	},
})