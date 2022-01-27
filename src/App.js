import { useReducer } from 'react'
import  NavBar  from "./components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { CartContext } from "./cartcontext/CartContext"
import { cartReducer, initialState } from './cartcontext/cartReducer'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ModalProvider } from 'styled-react-modal'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function App() {
	const [ cartState, dispatch ] = useReducer(cartReducer, initialState)

	return (
		<>
			<BrowserRouter>
				<ModalProvider>
				<CartContext.Provider value={{
					cartState,
					dispatch
				}}>
					<NavBar />
					<Home />
					<ToastContainer />
				</CartContext.Provider>
				</ModalProvider>
			</BrowserRouter>
		</>
	)
}

export default App
