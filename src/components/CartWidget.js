
import './cartwidget.css'
import cart from '../assets/shopping-cart-solid.svg';
export const  CartWidget = () => {
	return (
		<>
		<div className="">
			<img src={cart}className="cartwidget" alt="cart" />
		</div>
		</>
	)
}
