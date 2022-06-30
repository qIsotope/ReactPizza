import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../redux/slices/userSlice'
import { Form } from '../components/Form/Form';
import { showLoader, hideLoader } from '../redux/slices/loaderSlice'
import { Loader } from '../components/Loader/Loader';

export const Login = () => {
	const loader = useSelector(state => state.loader.isLoader)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const autheficate = (email, password) => {

		dispatch(showLoader())
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {

				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}));
				navigate('/')
				dispatch(hideLoader())
				localStorage.setItem('email', user.email)
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
						Авторизация
					</div>
					<Form handleClick={autheficate} title='Авторизоваться' />
					<div className="login__link-title">Если у вас нет акаунта, зарегистрируйтесь</div>
					<Link to='/register' className="login-link">Зарегистрироваться</Link>
				</div >
				{loader
					&& <Loader />
				}
			</div>
		</>
	)
}
