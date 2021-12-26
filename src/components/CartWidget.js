import { useContext } from "react"
import { CartContext } from "../cartcontext/CartContext"
import './cartwidget.css'
import cart from '../assets/shopping-cart-solid.svg';

export const  CartWidget = () => {
	const { cartState } = useContext(CartContext) 
	const totalProd = cartState.totalprod
	

	return (
		<>
		
		<div className="fw-bold fs-5">
			<img src={cart} className="cartwidget" alt="cart" />  {totalProd}
		</div>
		</>
	)
}
