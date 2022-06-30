import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCartPizza } from '../../redux/slices/pizzaSlice';
export const PizzaItem = (props) => {
	const pizzaTypes = ['Тонкое', 'Тридиционное']
	const [activeSize, setActiveSize] = useState(0)
	const [activeType, setActiveType] = useState(0)

	const dispatch = useDispatch();

	const findItem = (id) => (state) => state.pizza.cartPizza.find(item => item.id === id)
	const cartItem = useSelector(findItem(props.id))

	const addedCount = cartItem ? cartItem.count : 0;

	const addPizzaToCart = () => {
		const item = {
			imageUrl: props.imageUrl,
			id: props.id,
			title: props.title,
			price: props.price,
			category: props.category,
			size: props.sizes[activeSize],
			type: pizzaTypes[activeType],
			count: 1,
		}
		dispatch(setCartPizza(item))
	}

	return (
		<div className="pizza-block-wrapper">
			<div className="pizza-block">
				<img
					className="pizza-block__image"
					src={props.imageUrl}
					alt="Pizza"
				/>
				<h4 className="pizza-block__title">{props.title}</h4>
				<div className="pizza-block__selector">
					<ul>
						{props.types.map((t, i) =>
							<li key={i} onClick={() => setActiveType(i)}
								className={activeType === i ? 'active' : ''}
							>{pizzaTypes[t]}</li>
						)}
					</ul>
					<ul>
						{props.sizes.map((s, i) =>
							<li key={i} onClick={() => setActiveSize(i)}
								className={activeSize === i ? 'active' : ''}
							>{s}</li>
						)}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">от {props.price} ₽</div>
					<div onClick={addPizzaToCart} className="button button--outline button--add">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span onClick={() => findItem(props.id)}>Добавить</span>
						<i>{addedCount}</i>
					</div>
				</div>
			</div>
		</div>
	)
}
