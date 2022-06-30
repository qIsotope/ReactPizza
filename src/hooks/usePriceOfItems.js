import { useSelector } from 'react-redux'

export const usePriceOfItems = () => {
	const pizzas = useSelector(state => state.pizza.cartPizza)
	if (pizzas.length === 0) return 0
	return pizzas.reduce((acc, item) => item.count * item.price + acc, 0)
}
