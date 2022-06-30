import { Login } from "../pages/Login"
import { BasketPage } from "../pages/BasketPage"
import { NotFound } from "../pages/NotFound"
import PizzaPage from "../pages/PizzaPage"
import { Register } from "../pages/Register"

export const publicRoutes = [
	{ path: '', component: <PizzaPage /> },
	{ path: '/basket', component: <BasketPage /> },
	{ path: '*', component: <NotFound /> },

]

export const privateRoutes = [
	{ path: '*', component: <Login /> },
	{ path: '/register', component: <Register /> },
]