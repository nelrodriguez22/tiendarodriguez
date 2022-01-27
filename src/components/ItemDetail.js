import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { types } from "../types/types"
import { CartContext } from "../cartcontext/CartContext"

const ItemDetail = ({ item }) => {
	const navigate = useNavigate()
	const [ product, setProduct ] = useState(0)
	const { cartState, dispatch } = useContext(CartContext)
	const [ itemCount, setItemCount ] = useState(0)
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
				type: types.accaddprice,
				payload: counter * item.price
			})
		} else {
			dispatch({
				type: types.addprod,
				payload: {
					id: item.id,
					imageUrl: item.image,
					stock: item.stock,
					name: item.title,
					price: item.price,
					description: item.description,
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
	return (
		<div className="flex flex-col items-center min-h-screen	 ">
			<div className="self-start	ml-10">
				<button
					className="font-light mb-5 flex mt-3 text-center rounded p-1 outline outline-1 transition-all text-pink-500 outline-pink-500 hover:bg-pink-500 hover:text-white "
					onClick={() => navigate(-1)}
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
							d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
						/>
					</svg>
					Regresar
				</button>
			</div>
			<div className=" flex items-center md:w-1/2 w-full h-full">
				<img className=" mr-5 w-1/3 " src={item.image} alt="..." />
				<div className=" w-2/3">
					<h5 className="mb-3 text-md font-light tracking-tight">
						<span className="bg-gray-200 rounded p-1">#{item.id}</span>
						<span className="font-medium text-2xl "> {item.title}</span>
					</h5>
					<p className="font-bold mb-2 text-xl">
						<span className="text-md">Precio:</span>
						${item.price}
					</p>
					<p className="block text-sm mt-1 font-light">
						<span className="">Categoria:</span>
						{item.category}
					</p>
					<p className="text-sm mt-1 mb-1 block">
						<span className="text-md">Stock :</span>
						{item.stock}
					</p>
					<p className="mt-5">Descripcion:
						<span className=" block shrink mb-5 min-w-full text-sm">{item.description}</span>
					</p>

					<div className="flex flex-col justify-center">
						<ItemCount
							onEvent={onAdd}
							stock={item.stock}
							initial={0}
							price={item.price}
							{...item}
						/>
						{itemCount > 0 ? (
							<div className="place-self-center ">
								<Link to="/cart">
									<button className="flex mt-1 rounded p-2 outline-2 hover:outline hover:outline-3 outline-pink-500 bg-pink-500 text-white">
										Terminar compra
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
											/>
										</svg>
									</button>
								</Link>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}
export default ItemDetail