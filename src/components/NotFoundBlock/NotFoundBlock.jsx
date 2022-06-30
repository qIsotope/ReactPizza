import React from 'react'
import classes from './NotFound.module.css'
export const NotFoundBlock = () => {
	return (
		<div className={classes.root}>
			<h1>
				<span className={classes.smiley}>😕</span>
				<br />
				Ничего не найдено
			</h1>
			<div className={classes.description}>
				К сожалению данная страница отсутствует на нашем сайте.
			</div>
		</div>
	)
}
