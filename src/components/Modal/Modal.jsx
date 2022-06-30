import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Input } from '../inputMask/InputMask'
import emailjs from '@emailjs/browser';
import { useSelector, useDispatch } from 'react-redux'
import { usePriceOfItems } from '../../hooks/usePriceOfItems';
import { Loader } from '../Loader/Loader';
import { clearCart } from '../../redux/slices/pizzaSlice';
import { openThanksful } from '../../redux/slices/thanksfulSlice';
import { Transition } from 'react-transition-group';

export const Modal = ({ setModal, className, modal }) => {
	const dispatch = useDispatch()
	const [loader, setLoader] = useState(false)
	const pizzas = useSelector(state => state.pizza.cartPizza)
	let stringOfItems = ''
	pizzas.forEach(item => stringOfItems += item.title + '-' + item.count + '  ')
	const priceForOrder = usePriceOfItems()

	const validationsSchema = yup.object().shape({
		name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
		phone: yup.string().transform(value => value.replace(/[^\d]/g, '')).min(12, 'Введите корректный номер').required('Обязательно'),
		email: yup.string().email('Введите верный email').required('Обязательно'),
	})
	const reset = async (e) => {
		setLoader(false)
		e.resetForm()
		setModal(false)
		dispatch(clearCart())
		dispatch(openThanksful())
	}
	const sendEmail = async (values, e) => {
		setLoader(true)
		values.items = stringOfItems
		values.price = priceForOrder

		await emailjs.send('service_rmjvqes', 'template_m3ieock', values, 'TAAu1HERcIl3Df5lP')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		await reset(e)
	};



	return (
		<div onClick={() => setModal(false)} className={'modal'}>
			<Transition
				in={modal}
				timeout={2000}
			>
				{state => <div onClick={(e) => e.stopPropagation()} className={`modal-body ${state}`}>
					<div className="modal-title">
						Оформление заказа
					</div>
					<Formik
						initialValues={{
							name: '',
							secondName: '',
							email: '',
							phone: '',
						}}
						validateOnBlur
						onSubmit={(values, e) => {
							sendEmail(values, e)
						}}
						validationSchema={validationsSchema}
					>
						{({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
							<div className={`from`}>
								<p>
									<label className='modal-label' htmlFor={`name`}>Имя</label><br />
									<input
										className='modal-input'
										type={`text`}
										name={`name`}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
									/>
								</p>
								{touched.name && errors.name && <p className={'modal-error'}>{errors.name}</p>}
								<p>
									<label className='modal-label' htmlFor={`secondName`}>Фамилия</label><br />
									<input
										className='modal-input'
										type={`text`}
										name={`secondName`}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.secondName}
									/>
								</p>
								{touched.secondName && errors.secondName && <p className={'modal-error'}>{errors.secondName}</p>}
								<p>
									<label className='modal-label' htmlFor={`email`}>Email</label><br />
									<input
										className='modal-input'
										type={`email`}
										name={`email`}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
									/>
								</p>
								{touched.email && errors.email && <p className={'modal-error'}>{errors.email}</p>}

								<p>
									<label className='modal-label' htmlFor={`phone`}>Телефон</label><br />
									<Input
										className='modal-input'
										type={`phone`}
										name={`phone`}
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.phone}
									/>

								</p>
								{touched.phone && errors.phone && <p className={'modal-error'}>{errors.phone}</p>}
								<button
									className='modal-button'
									// disabled={!isValid || !dirty}
									onClick={handleSubmit}
									type={`submit`}
								>Отправить</button>
							</div>
						)}
					</Formik>

				</div>}
			</Transition>
			{loader
				&& <Loader />
			}
		</div>
	)
}
