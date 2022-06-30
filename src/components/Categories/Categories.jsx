import React, { useState, useEffect } from 'react'
import { Category } from '../Category/Category'

export const Categories = ({ activeCategory, setActiveCategory }) => {
	const categories = [
		{ title: 'Все', id: '1' },
		{ title: 'Мясные', id: '2' },
		{ title: 'Вегетарианская', id: '3' },
		{ title: 'Гриль', id: '4' },
		{ title: 'Острые', id: '5' },
		{ title: 'Закрытые', id: '6' }
	]

	return (
		<div className="categories">
			<ul>
				{categories.map((category, i) =>
					<Category onClick={() => setActiveCategory(i)}
						className={activeCategory === i ? 'active' : ''}
						key={i}> {category.title}</Category>
				)}
			</ul>
		</div >
	)
}
