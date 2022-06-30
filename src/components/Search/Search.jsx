import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/slices/filterSlice'

import classes from './search.module.scss'

export const Search = () => {
	const searchValue = useSelector(state => state.filter.searchValue)
	const dispatch = useDispatch();

	const onChangeInput = (e) => {
		dispatch(setSearchValue(e.target.value))
	}

	return (
		<input value={searchValue} onChange={onChangeInput}
			className={classes.root} placeholder="Поиск пиццы..." />
	)
}
