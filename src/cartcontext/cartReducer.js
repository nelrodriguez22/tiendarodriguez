import { types } from "../types/types";


export const initialState = {
	productos: []
}


export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addprod:
			return {
				...state,
				productos: [ ...state.productos, action.payload ]
			}
		case types.rmvprod:
			return {
				...state,
				productos: state.productos.filter(productos => productos.id !== action.payload)
			}
		case types.clear:
			return {
				...state,
				productos: []
			}
		case types.isInCart:
			return {
				...state,
				productos: state.productos.map(producto => {
					if (producto.id === action.payload.id) {
						return {
							...producto,
							quantity: producto.quantity + action.payload.quantity
						}
					}
					return producto
				}
				)
			}
		default:
			return state;
	}
}