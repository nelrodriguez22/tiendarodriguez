import { useState, useReducer, useEffect } from 'react'
import { NavBar } from "./components/NavBar"
import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { CartContext } from "./cartcontext/CartContext"
import { cartReducer, initialState } from './cartcontext/cartReducer'
import {
	collection,
	query,
	onSnapshot
} from "firebase/firestore"
import db from "./firebase/firebaseConfig"




function App() {
	const [ cartState, dispatch ] = useReducer(cartReducer, initialState)
	const [ products, setProducts ] = useState([])

	useEffect(() => {
		const q = query(collection(db, "productos"))
		const unsub = onSnapshot(q, (querySnapshot) => {
			let productsArray = []
			querySnapshot.forEach((doc) => {
				productsArray.push({ ...doc.data(), id: doc.id })
			})
			setProducts(productsArray)
		})
		return () => unsub()
	}, [])

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

export default App
