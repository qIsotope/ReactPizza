import { useSelector } from 'react-redux'

export const useCountOfItems = () => {
	const pizzas = useSelector(state => state.pizza.cartPizza)
	if (pizzas.length === 0) return 0
	return pizzas.reduce((acc, item) => acc + item.count, 0)
}

