import { useReducer } from 'react'
import { NavBar } from "./components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { CartContext } from "./cartcontext/CartContext"
import { cartReducer, initialState } from './cartcontext/cartReducer'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"





function App() {
	const [ cartState, dispatch ] = useReducer(cartReducer, initialState)

	return (
		<>

			<BrowserRouter>
				<CartContext.Provider value={{
					cartState,
					dispatch
				}}>
					<NavBar />
					<Home />
					<ToastContainer />
				</CartContext.Provider>
			</BrowserRouter>

		</>
	)
}

export default App
