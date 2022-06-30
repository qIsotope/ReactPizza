import React from 'react'
import classes from './pagination.module.scss'
export const Pagination = (props) => {
	const rootClasses = [classes.pagination]

	return (
		<div {...props} ><span className='number'>{props.children}</span></div >
	)
}
