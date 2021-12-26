import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
import { types } from "../types/types"
import { CartContext } from "../cartcontext/CartContext"



export const ItemDetail = ({ item }) => {
	const navigate = useNavigate()
	const [ product, setProduct ] = useState(0)
	const { cartState, dispatch } = useContext(CartContext)
	const [ itemCount, setItemCount ] = useState(0);

	const isInCart = (id, counter) => {
		const product = cartState.productos.find(product => product.id === id)
		if (product) {
			dispatch({
				type: types.isInCart,
				payload: {
					id,
					quantity: counter
				}
			})
			dispatch({
				type: types.accaddprod,
				payload: {
					totalprod: counter
				}
			})
			dispatch({
				type: types.totalprice,
				payload: counter * item.price
			})
		} else {
			dispatch({
				type: types.addprod,
				payload: {
					id: item.id,
					imageUrl:item.image,
					stock: item.rating.count,
					name: item.title,
					price: item.price,
					description: item.description,
					quantity:counter
				}
			})
			dispatch({
				type: types.accaddprod,
				payload: {
					totalprod:counter
				}
		})
			dispatch({
				type: types.accaddprice,
				payload: counter * item.price
			})
	}
	}
	
	const onAdd = (counter) => {
		setProduct(product + counter)
		isInCart(item.id, counter)
		setItemCount(counter)
		
	}
//TODO agregar el feedback al usuario de todas las acciones(swal o toasty)


	return (
		<div className="container-fluid d-flex flex-column align-items-center">
			<div>
				<button
					className="btn btn-outline-secondary mt-3 ms-4"
					onClick={() => navigate(-1)}
				>
					Regresar
				</button>
			</div>
			<div className="card col-6 mt-3 ">
				<div className="d-flex justify-content-center">
					<img className="" src={item.image} alt="..." />
					<div>	
						<ItemCount
							onEvent={onAdd}
							stock={item.rating?.count}
							initial={0}
							{...item}
						/>
						{itemCount > 0 
						? (
							<Link to="/cart" className="btn btn-primary">
								Terminar Compra
							</Link>
						) 
						: null
						}
					</div>
				</div>
				<p>{item.description}</p>
				<div className="text-center fs-3">Precio:${item.price}</div>
				
			</div>
		</div>
	)
}
