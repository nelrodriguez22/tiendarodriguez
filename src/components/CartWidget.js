
import './cartwidget.css'
import cart from '../assets/shopping-cart-solid.svg';
export const  CartWidget = () => {
	return (
		<>
			<img src={cart}className="cartwidget" alt="cart" />
		</>
	)
}
