
import {useContext} from "react"
import {CartContext} from "../cartcontext/CartContext"
import { types } from "../types/types"

import '../App.css'

const CartList = ({...producto}) => {
const {  dispatch } = useContext(CartContext)


  const handleRemove = (id) => {
		dispatch({
			type: types.rmvprod,
			payload: id
		})
		dispatch({
			type:types.accrmvprod,
			payload:{
				id,
				totalprod:producto.quantity
		}
		})
		dispatch({
			type:types.accrmvprice,
			payload:{
				id,
				totalprice:producto.price * producto.quantity
			}
		})
	}
	  
	return ( 
		<tbody>
			<tr>
				<td>
					<img
						src={producto.imageUrl}
						alt=""
						className="ci image-fluid"
					/>
					{producto.name}
				</td>
				<td>${producto.price}</td>
				<td>
					{producto.quantity}
				</td>
				<td>${producto.quantity*producto.price}</td>
				<td>
					<button 
					className="btn btn-danger"
					onClick={() => handleRemove(producto.id)}
					>
						Eliminar
					</button>
				</td>
			</tr>
		</tbody>
	 )
}
 
export default CartList