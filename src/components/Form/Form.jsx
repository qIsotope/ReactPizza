
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup'

export const Form = ({ title, handleClick }) => {

	const validationsSchema = yup.object().shape({
		email: yup.string().email('Введите верный email').required('Обязательно'),
		password: yup.string().min(6, 'Минимум 6 символов').required('Обязательно'),
	})

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validateOnBlur
			onSubmit={(value) => {
				handleClick(value.email, value.password)
			}}
			validationSchema={validationsSchema}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
				<div className={`login-form`}>
					<p>
						<label className='login-label' htmlFor={`name`}>Email</label><br />
						<input
							className='modal-input'
							type={`text`}
							name={`email`}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
					</p>
					{touched.email && errors.email && <p className={'modal-error'}>{errors.email}</p>}
					<p>
						<label className='login-label' htmlFor={`secondName`}>Password</label><br />
						<input
							className='modal-input'
							type={`password`}
							name={`password`}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.secondName}
						/>
					</p>
					{touched.password && errors.password && <p className={'modal-error'}>{errors.password}</p>}
					<button
						className='login-button'
						// disabled={!isValid || !dirty}
						onClick={handleSubmit}
						type={`submit`}
					>{title}</button>
				</div>
			)}
		</Formik>

	)
}
