import { types } from "../types/types";


export const initialState = {
	productos: [],
	totalprod: 0,
	totalprice: 0
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
				productos: [ ...state.productos.filter(productos => productos.id !== action.payload) ]
			}
		case types.clear:
			return {
				...state,
				productos: []
			}
			
		case types.isInCart:
			return {
				...state,
				productos: state.productos.map(productos => {
					if (productos.id === action.payload.id) {
						return {
							...productos,
							quantity: productos.quantity + action.payload.quantity
						}
					} else {
						return productos
					}
				})
			}

		case types.accaddprod:
			return {
				...state,
				totalprod: state.totalprod + Number(action.payload.totalprod)
			}
		case types.accaddprice:
			return {
				...state,
				totalprice: state.totalprice + action.payload
			}
			case types.accrmvprod:
			return {
				...state,
				totalprod: state.totalprod - action.payload.totalprod
			}
		case types.accrmvprice:
			return {
				...state,
				totalprice: state.totalprice - action.payload.totalprice
			}
		default:
			return state;
	}
}



