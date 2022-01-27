import CartList from "./CartList"
import { useContext } from "react"
import { CartContext } from "../cartcontext/CartContext"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { addBuy, getOrder } from "../assets/ApiCalls"
import { types } from "../types/types"
import Modal from "styled-react-modal"
import { useState } from "react"
import { toast, Flip } from "react-toastify"



const Cart = () => {
	const { cartState, dispatch } = useContext(CartContext)
	const productos = cartState.productos
	const totalprice = cartState.totalprice
	const navigate = useNavigate()
	const [ isOpen, setIsOpen ] = useState(false)
	const [ order, setOrder ] = useState([])
	const [ orderId, setOrderId ] = useState(0)

	const StyledModal = Modal.styled`
	width: 70%;
	height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	border-radius: 10px;
	`
	const clearNGo = () => {
		dispatch({
			type: types.clear,
		})
		navigate("/")
	}
	const toggleModal = (e) => {
		setIsOpen(!isOpen)
	}
	const handleBuy = async () => {
		toast.success('Aguarde unos momentos, su factura esta siendo generada!', {
			position: "bottom-center",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			transition: Flip
		})
		const prodsFiltered = () => {
			const arr = []
			productos.forEach((item) => {
				arr.push({
					id: item.id,
					name: item.name,
					price: item.price,
					quantity: item.quantity,
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
				email: "jhondoe@gmail.com",
			},
		}
		const buyOrderRef = await addBuy(buyOrder)
		const getOrderRef = await getOrder(buyOrderRef)
		setOrder(getOrderRef)
		setOrderId(buyOrderRef)
		toggleModal()
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
					<h2 className="font-bold text-xl ">
						Total: ${cartState.totalprice.toFixed(2)}
					</h2>
				</div>
				<div className="mt-5 self-end mr-10">
					{productos.length > 0 ? (
						<button
							onClick={handleBuy}
							className="flex rounded mt-2 p-2 outline-pink-500 bg-pink-500 text-white hover:outline-3 hover:outline transitions-all delay-300"
						>
							<span className="font-bold">Comprar</span>
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
									d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</button>
					) : (
						<Link
							to="/"
							className=" font-light mb-5 flex mt-3 text-center rounded p-1 outline outline-1 transition-all text-pink-500 outline-pink-500 hover:bg-pink-500 hover:text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
							Volver al inicio
						</Link>
					)}
					<div className="">
						<StyledModal
							isOpen={isOpen}
							onBackgroundClick={toggleModal}
							onEscapeKeydown={toggleModal}
							afterClose={clearNGo}
						>
							<div className="flex flex-col grow text-center text-slate-500 p-2 ">
								<span className="mb-5 flex justify-center items-center">
									Muchas gracias por su compra!
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
											d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</span>
								<span>Nombre: <span className="font-bold">Jhon</span></span>
								<span>Apelido: <span className="font-bold">Doe</span></span>
								<span>E-mail: <span className="font-bold">jhondoe@gmail.com</span></span>
								<span className="text-sm">Orden: <span className="font-bold">{orderId}</span></span>
								<div className="flex flex-col justify-top h-full text-sm ">
									<div className="flex justify-around">
										<table className="border border-gray-500 grow">
											<thead className=" ">
												<tr className=" bg-gray-500 text-white ">
													<th>Producto</th>
													<th>Precio Unitario</th>
													<th>Cantidad</th>
													<th>Total</th>
												</tr>
											</thead>
											<tbody className="border border-gray-200">
												{order.items !== undefined ? (
													order.items.map((item) => (
														<tr key={item.id}>
															<td>{item.name}</td>
															<td>${item.price}</td>
															<td>x{item.quantity}</td>
															<td>${item.quantity * item.price}</td>
														</tr>
													))
												) : (
													<tr>
														<td colSpan="4">
															<h4>No hay productos en el carrito</h4>
														</td>
													</tr>
												)}
												<tr className="bg-gray-400 text-white">
													<td colSpan="4">
														<span className="font-bold">
															Total a pagar: ${order.total}
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>

									<button
										className="mt-5 w-2/5 h-2/5 hover:bg-gray-500 hover:text-white rounded self-center "
										onClick={clearNGo}
									>
										Cerrar
									</button>
								</div>
							</div>
						</StyledModal>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Cart