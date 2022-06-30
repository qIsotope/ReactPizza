import React, { useState } from 'react'
import { CartItemList } from '../CartItemList/CartItemList'

import { Modal } from '../Modal/Modal'
import { FillCartTop } from './FillCartTop'
import { FillCartBottom } from './FillCartBottom'
export const FillCart = () => {
	const [modal, setModal] = useState(false)
	return (
		<>
			<div className="cart">
				<FillCartTop />
				<CartItemList />
				<FillCartBottom setModal={setModal} />
			</div>
			{modal &&
				<Modal setModal={setModal} modal={modal} />
			}

		</>
	)
}
