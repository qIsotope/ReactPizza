import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	isLoading: false,
	cartPizza: [],
	pizzas: [],
	status: null,
	error: null,
	totalPages: 10,
}

export const fetchPizza = createAsyncThunk(

	'pizza/fetchPizza',
	async ({ URL }, { rejectWithValue }) => {
		try {
			const response = await axios.get(URL)
			if (response.status !== 200) {
				throw new Error('Server error')
			}
			return response.data
		}
		catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const fetchAllPizza = createAsyncThunk(

	'pizza/fetchAllPizza',
	async ({ URL }, { rejectWithValue }) => {
		try {
			const response = await axios.get(URL)
			if (response.status !== 200) {
				throw new Error('Server error')
			}
			return response.data
		}
		catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const filterSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload
		},

		setCartPizza(state, action) {
			const findItem = state.cartPizza.find(item => item.id === action.payload.id)
			if (findItem) {
				findItem.count++
			}
			else {
				state.cartPizza = [...state.cartPizza, action.payload]
			}
		},
		removePizza(state, action) {
			state.cartPizza = [...state.cartPizza.filter(item => item.id !== action.payload)]
		},
		minusPizza(state, action) {
			const findItem = state.cartPizza.find(item => item.id === action.payload)
			if (findItem.count === 1) {
				state.cartPizza = [...state.cartPizza.filter(item => item.id !== action.payload)]
			}
			else {
				findItem.count--
			}
		},
		plusPizza(state, action) {
			const findItem = state.cartPizza.find(item => item.id === action.payload)
			findItem.count++
		},
		clearCart(state) {
			state.cartPizza = []
		}
	},
	extraReducers: {
		[fetchPizza.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchPizza.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.pizzas = action.payload
		},
		[fetchPizza.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		},
		[fetchAllPizza.fulfilled]: (state, action) => {
			state.totalPages = action.payload.length
			state.pizzas = action.payload.filter((_, index) => index < 4)
		},
	}



})

export const { setIsLoading, setCartPizza, removePizza, clearCart, minusPizza, plusPizza } = filterSlice.actions

export default filterSlice.reducer