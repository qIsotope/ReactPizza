import React from 'react'
import { CartItem } from '../CartItem/CartItem'

import { useSelector } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'
import { CSSTransition } from 'react-transition-group'

export const CartItemList = () => {
	const arrayCartItem = useSelector(state => state.pizza.cartPizza)
	return (
		<div className="content__items">
			<TransitionGroup>
				{arrayCartItem.map(item =>
					<CSSTransition
						key={item.id}
						timeout={500}
						classNames="item"
					>
						<CartItem  {...item} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	)
}
