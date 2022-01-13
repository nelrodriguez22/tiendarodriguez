
import {useContext} from "react"
import {CartContext} from "../cartcontext/CartContext"
import { types } from "../types/types"
import { NavLink } from "react-router-dom"


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
    <tbody className="border border-pink-200 ">
      <tr className="">
        <td className="flex ">
						<img src={producto.imageUrl} alt="" className="w-10 h-10" />
					<NavLink className="text-sm self-center transition ease-in-out delay-150 hover:text-slate-500 text-pink-500 " to={`/item/${producto.id}`} >
						<span className="ml-2 font-semibold">{producto.name}</span>	
						</NavLink>
        </td>
        <td className="text-center">${producto.price}</td>
        <td className="text-center">{producto.quantity}</td>
        <td className="text-center">${producto.quantity * producto.price}</td>
        <td className="text-center">
          <button
            className="text-pink-500"
            onClick={() => handleRemove(producto.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
 
export default CartList