import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { closeThanksful } from '../../redux/slices/thanksfulSlice'
import { useDispatch } from 'react-redux'
import pizza from './thanksful.png'

export const Thanksful = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		return () => {
			dispatch(closeThanksful())
		}
	}, [])


	return (
		<div className="cart">
			<div className="thanksful">
				<div className="thanksful-title">
					Спасибо за заказ! <br />
					Ждите, мы с вами обязательно свяжемся.
				</div>
				<div >
					<img className="thanksful-image" src={pizza} alt="" />
				</div>
				<div className="thanksful-button">
					<Link to='/'>
						Вернуться в магазин
					</Link>
				</div>
			</div>
		</div>
	)
}
