
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from '../components/Form/Form';
import { Loader } from '../components/Loader/Loader';
import { showLoader, hideLoader } from '../redux/slices/loaderSlice'

export const Register = () => {
	const loader = useSelector(state => state.loader.isLoader)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const register = (email, password) => {

		dispatch(showLoader())
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				// dispatch(setUser({
				// 	email: user.email,
				// 	id: user.uid,
				// 	token: user.accessToken,
				// }));
				navigate('/')
				dispatch(hideLoader())
			})
			.catch((e) => {
				alert(`error: ${e.message}`)
				dispatch(hideLoader())
			})
	}


	return (
		<>
			<div className="container">
				<div className="login-page">
					<div className="login-title">
						Регистрация акаунта
					</div>
					<Form handleClick={register} title='Зарегистрироваться' />
					<div className="login__link-title">Если у вас уже есть акаунт</div>
					<Link to='*' className="login-link">Авторизоваться</Link>
				</div >
				{loader
					&& <Loader />
				}
			</div>
		</>
	)
}