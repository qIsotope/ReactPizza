import React from 'react'
import loader from './loader.gif'
export const Loader = () => {
	return (
		<div className="loader">
			<div className="loader-body">
				<div className="loader-container">
					<img className="loader-img" src={loader} alt="" />
				</div>
			</div>
		</div>
	)
}
