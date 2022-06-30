import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './components/Header/Header';
import './style/app.scss';
import { publicRoutes, privateRoutes } from './routes/appRoutes';
import './firebase'
import { useAuth } from './hooks/useAuth'
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import { setUser } from './redux/slices/userSlice';

function App() {

	const dispatch = useDispatch()

	const { isAuth, email } = useAuth()
	const location = useLocation();
	return (
		<div className="wrapper">
			<Header email={email} />
			<div className="content">
				<TransitionGroup component={null}>
					<CSSTransition key={location.key} classNames="fade" timeout={800}>
						<Routes location={location}>
							{isAuth
								? privateRoutes.map(route =>
									<Route key={route.path} path={route.path} element={route.component} />
								)
								: publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.component} />)
							}
						</Routes>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</div>

	);
}

export default App;
