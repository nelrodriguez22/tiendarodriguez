import CartList from "./CartList"
import { useContext } from "react"
import { CartContext } from "../cartcontext/CartContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { addBuy} from "../assets/ApiCalls"
import { types } from "../types/types"
import Modal from 'styled-react-modal'
import { useState} from "react"






export const Cart = () => {
	const { cartState, dispatch } = useContext(CartContext)
	const productos = cartState.productos
	const totalprice = cartState.totalprice
	const navigate = useNavigate()
	const [ isOpen, setIsOpen ] = useState(false)
	



	const StyledModal = Modal.styled`
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`
	const toggleModal=(e)=> {
		setIsOpen(!isOpen)

	}

	const handleBuy = async () => {
		toggleModal()
		setTimeout(async () => {
		const prodsFiltered = () => {
			const arr = []
			productos.forEach((item) => {
				arr.push({
					id: item.id,
					name: item.name,
					price: item.price,
					quantity: item.quantity
				})
			})
			return arr
		}
		const buyOrder = {
			items: prodsFiltered(),
			total: totalprice,
			date: new Date(),
			buyer: {
				name: "Jhon Doe",
				phone: "123456789",
				email: "jd@email.com",
			},
		}
		const buyOrderRef = await addBuy(buyOrder)
			dispatch({
				type: types.clear,
			})
			navigate("/")
		}, 2000)
	}






	return (
		<div className="flex flex-col text-slate-500 xl:w-4/5 items-center justify-center">
			<div className="self-start	ml-5">
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
			<div className="">
				<h1 className="ml-5 font-bold text-xl">Tu Carrito</h1>
			</div>
			<div className="p-2 w-full">
				<div className="flex flex-row  rounded-t-xl border-1 overflow-hidden">
					<table className=" w-full ">
						<thead className="overflow-visible">
							<tr className=" bg-pink-500 text-white ">
								<th>Producto</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th>Total</th>
								<th>Acciones</th>
							</tr>
						</thead>
						{productos.length > 0 ? (
							productos.map((producto) => (
								<CartList key={producto.id} {...producto} />
							))
						) : (
							<tbody>
								<tr>
									<td colSpan="5">
										<h4>No hay productos en el carrito</h4>
									</td>
								</tr>
							</tbody>
						)}
					</table>
				</div>
			</div>
			<div className="flex flex-col w-1/5 self-end mt-5">
				<div className="self-end mr-10">
					<h2 className="font-bold text-xl ">Total: ${cartState.totalprice.toFixed(2)}</h2>
				</div>
				<div className="mt-5 self-end mr-10">
					{productos.length > 0 ? (
						<button onClick={handleBuy} className="flex rounded p-2 outline-pink-500 bg-pink-500 text-white hover:outline-3 hover:outline transitions-all delay-300">
							<span className="font-bold">Comprar</span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					) : (
						<Link
							to="/"
							className=" font-light mb-5 flex mt-3 text-center rounded p-1 outline outline-1 transition-all text-pink-500 outline-pink-500 hover:bg-pink-500 hover:text-white"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>Volver al inicio
						</Link>
					)}
					<div>
						<StyledModal
							isOpen={isOpen}
							onBackgroundClick={toggleModal}
							onEscapeKeydown={toggleModal}
							>
							<div className="flex flex-col mb-3">
								Muchas gracias por su compra!
								<button className="mt-5" onClick={toggleModal}>Cerrar</button>
							</div>
						</StyledModal>
					</div>
				</div>
			</div>

		</div>
	)
}