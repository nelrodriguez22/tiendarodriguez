import { useReducer } from 'react'
import { NavBar } from "./components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { CartContext } from "./cartcontext/CartContext";
import { cartReducer, initialState } from './cartcontext/cartReducer'






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
				</CartContext.Provider>
			</BrowserRouter>

		</>
	)
}

export default App;
