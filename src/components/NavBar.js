import React, { useContext } from 'react'
import  {CartWidget}  from "./CartWidget"
import {NavLink } from "react-router-dom"
import { CartContext } from "../cartcontext/CartContext"


export const NavBar = () => {
	const { cartState } = useContext(CartContext)
	const totalProd = cartState.totalprod
	return (
		<>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<NavLink	className="navbar-brand" to="/"	>
						T-Shirts Commerce
					</NavLink >
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link active"	to="/"	>
									Home
								</NavLink >
							</li>
							<li className="nav-item">
								<NavLink className="nav-link"  to="/category/masculina"	>
									Masculina
								</NavLink>
									</li>
							<li className="nav-item">
									<NavLink	className="nav-link"  to="/category/femenina"	>
									Femenina
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/category/unisex"	>
									Unisex
								</NavLink>
							</li>
					
							
						</ul>
						{totalProd > 0 ? <CartWidget /> : null}
						
						<button
							className="btn btn-secondary"
						>
							Login
						</button>
					</div>
				</div>
			</nav>
			</>
	)
}
