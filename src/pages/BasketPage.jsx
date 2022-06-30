import React from 'react'
import { EmptyCart } from '../components/EmptyCart/EmptyCart'
import { FillCart } from '../components/FillCart/FillCart'
import { useSelector } from 'react-redux'

export const BasketPage = () => {

	const items = useSelector(state => state.pizza.cartPizza)

	return (
		<div className="container container--cart">
			{items.length === 0
				? <EmptyCart />
				: <FillCart />
			}
		</div>
	)


}
