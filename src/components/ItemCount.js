import { useState } from "react"
import { toast, Flip } from "react-toastify"


export const ItemCount = ({ stock, initial, onEvent, price} ) => {
	const [ counter, setCounter ] = useState(initial)
	const [ add, setAdd ] = useState(0)



	const onAdd = () => {
		if (counter === 0) {
			return toast.error('Debe agregar al menos 1 producto', {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				transition: Flip
			});
		}
		if (add + counter <= stock) {
			toast.success('Producto Agregado con éxito!', {
				position: "top-right",

				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				transition: Flip
			});
			setAdd(add + counter)
			onEvent(counter)
		} else {
			toast.error('No hay suficientos productos!', {
				position: "top-right",

				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				transition: Flip
			});
		}
	}

	const handleDecrement = () => {
		if (counter === 0) {
			return
		}
		setCounter(counter - 1)
	}

	const handleIncrement = () => {
		if (counter === stock) {
			return
		}
		setCounter(counter + 1)
	}


	return (
		<div className=" flex flex-col">
			<div className=" flex flex-col mb-4 place-self-center	">
				<div className="mb-2 mt-2 self-center">
				<span className="text-sm">Cantidad:</span>
				</div>
				<div className="">
				<button
					onClick={handleDecrement}
					type="button"
					className="w-9 h-9 rounded-full outline outline-1 text-pink-500 outline-pink-500 hover:bg-pink-500 hover:text-white basis-8 font-bold"
				>
					-
				</button>
				<span className="text-center p-2 text-lg ml-1 mr-1">{counter}</span>
				<button
					onClick={handleIncrement}
					type="button"
						className="w-9 h-9 rounded-full outline outline-1 text-pink-500 outline-pink-500 hover:bg-pink-500 hover:text-white basis-8  font-bold"
				>
					+
				</button>
				</div>
			</div>
			<div className="place-self-center text-sm">Subtotal: ${counter*price}</div>
			<div className="place-self-center">
				<button
					onClick={onAdd}
					className="flex mt-3 font-light text-center rounded p-1 outline outline-1 transition-all text-pink-500 outline-pink-500 hover:bg-pink-500 hover:text-white">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					Agregar Al carrito
				</button>
			</div>
		</div>
	)
}

export default ItemCount