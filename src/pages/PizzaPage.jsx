import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories } from '../components/Categories/Categories';
import { PizzaItems } from '../components/PizzaItems/PizzaItems';
import { Sort } from '../components/Sort/Sort';
import '../style/app.scss';
import { Pagination } from '../components/Pagination/Pagination';
import { setCategoryId, setSortType, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchPizza } from '../redux/slices/pizzaSlice';
import useDebounce from '../hooks/useDebounce';
import { getArrayOfPages } from '../utils/getArrayOfPages';
import { fetchAllPizza } from '../redux/slices/pizzaSlice';

function PizzaPage() {
	const searchValue = useSelector(state => state.filter.searchValue)
	const { pizzas, status, error } = useSelector(state => state.pizza)
	const totalPages = useSelector(state => state.pizza.totalPages)
	const filterObject = useSelector(state => state.filter)
	const dispatch = useDispatch();

	const setActiveCategory = (id) => {
		dispatch(setCurrentPage(1))
		dispatch(setCategoryId(id))
	}
	const setActiveSort = (id) => {
		dispatch(setSortType(id))
	}
	const setActivePage = (id) => {
		dispatch(setCurrentPage(id))
	}
	const isMounted = useRef(false)


	const arrayOfPages = getArrayOfPages(totalPages, 4)

	const correctCategory = filterObject.categoryId > 0 ? 'category=' + filterObject.categoryId : ''
	const search = searchValue ? `search=${searchValue}` : ''


	useEffect(() => {
		dispatch(fetchPizza({
			URL: `https://6295129b63b5d108c1997a54.mockapi.io/Products?page=${filterObject.currentPage}
			&limit=4&${correctCategory}${search}&sortBy=${filterObject.sortType.sort}`
		}))
	}, [filterObject.categoryId, filterObject.sortType, filterObject.currentPage])

	const debouncedSearch = useDebounce(() => dispatch(fetchAllPizza({
		URL: `https://6295129b63b5d108c1997a54.mockapi.io/Products?&${search}
	&sortBy=${filterObject.sortType.sort}`
	})), 150)



	useEffect(() => {
		if (isMounted.current) {
			setActiveCategory(0)
			debouncedSearch()
			setActivePage(1)
		}
		isMounted.current = true
	}, [searchValue])

	useEffect(() => {
		if (isMounted.current) {
			setActivePage(1)
		}
		isMounted.current = true
	}, [filterObject.categoryId])


	return (
		<div className="container">
			<div className="content__top">
				<Categories activeCategory={filterObject.categoryId} setActiveCategory={setActiveCategory} />
				<Sort activeSort={filterObject.sortType} setActiveSort={(i) => setActiveSort(i)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>

			{pizzas.length === 0 && searchValue
				? <h1>У нас, к сожалению, нет такой пиццы... :с</h1>
				: <>
					<PizzaItems pizzas={pizzas} status={status} />
					<div className='pagination'>
						{arrayOfPages.map((_, i) => <Pagination className={filterObject.currentPage === i + 1 ? 'pagination-item selected' : 'pagination-item'}
							onClick={() => setActivePage(i + 1)} key={i}>{i + 1}</Pagination>)}
					</div>
				</>
			}
			{error && <h1>Ошибка при загрузке пиц</h1>}
		</div >
	);
}

export default PizzaPage;
