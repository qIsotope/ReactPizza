import React from 'react'
import cart from './empty-cart.png'
export const EmptyCartInfo = () => {
	return (
		<div>
			<h2>Корзина пустая 😕</h2>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src={cart} alt="Empty cart" />
		</div>
	)
}
