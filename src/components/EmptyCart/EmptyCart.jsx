import React from 'react'
import { Link } from 'react-router-dom'
import { EmptyCartInfo } from '../EmptyCartInfo/EmptyCartInfo'
import { useSelector } from 'react-redux'
import { Thanksful } from '../Thanksful/Thanksful'

export const EmptyCart = () => {
	const thanksful = useSelector(state => state.thanksful.isThanksful)
	return (
		<div className="cart cart--empty">

			{thanksful
				? <Thanksful />
				: <><EmptyCartInfo />
					<Link to="/" className="button button--black">
						<span>Вернуться назад</span>
					</Link>
				</>
			}


		</div>
	)
}
