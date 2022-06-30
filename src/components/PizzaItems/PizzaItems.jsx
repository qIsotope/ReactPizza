import React from 'react'

import { PizzaItem } from '../PizzaItem/PizzaItem'
import { SkeletonPizzaItem } from '../PizzaItem/SkeletonPizzaItem'


export const PizzaItems = ({ pizzas, status }) => {
	return (
		<div className="content__items">
			{status === 'loading'
				?
				[...new Array(6)].map((_, i) => <SkeletonPizzaItem key={i} />)
				:
				pizzas.map(pizza => <PizzaItem key={pizza.id} {...pizza}
				/>)

			}

		</div>
	)
}
