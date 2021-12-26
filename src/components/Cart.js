import CartList from "./CartList"
import { useContext } from "react"
import { CartContext } from "../cartcontext/CartContext"
import { Link } from "react-router-dom"

export const Cart = () => {
	  const { cartState } = useContext(CartContext)
	const productos = cartState.productos
			
	
	return ( 
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>Carrito</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<table className="table table-striped">
							<thead>
								<tr>
									<th>Producto</th>
									<th>Precio</th>
									<th>Cantidad</th>
									<th>Total</th>
									<th>Acciones</th>
								</tr>
							</thead>
							{productos.length > 0 
							?(
									productos.map((producto) => (
										<CartList key={producto.id} {...producto} />
									))		
							)
							:(
								<tbody >
									<tr >
										<td colSpan="5">
											<h4>No hay productos en el carrito</h4>
											
										</td>
									</tr>
								</tbody>
							)}
							
							
						</table>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<h3>Total: ${(cartState.totalprice).toFixed(2)}</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{productos.length > 0 
						?(
							<button className="btn btn-success">
							Comprar
						</button>
						)
						: (
						<Link to="/" className="btn btn-outline-secondary">
							Volver
						</Link>
							)}
					</div>
				</div>
			</div>
		</>
	 );
}
 