import React, { useContext } from 'react'
import  CartWidget  from "./CartWidget"
import { NavLink } from "react-router-dom"
import { CartContext } from "../cartcontext/CartContext"

const NavBar = () => {
	const { cartState } = useContext(CartContext)
	const totalProd = cartState.totalprod
	return (
		<nav className="bg-gray-100 text-slate-500 shadow-lg sticky top-0">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between">
					<div className="flex p-3 items-center text-lg font-medium">
						<div>
							<NavLink className="" to="/"	>
								<div className="h-10 w-10 logohoodie mr-5"></div>
							</NavLink>
						</div>
						<div className="flex m-2">
							<div className="p-2 transition ease-in-out delay-150 hover:text-pink-500">
								<NavLink to="/category/masculina"	>
									Masculina
								</NavLink>
							</div>
							<div className="p-2 transition ease-in-out delay-150 hover:text-pink-500 ">
								<NavLink to="/category/femenina"	>
									Femenina
								</NavLink>
							</div>
							<div className="p-2 transition ease-in-out delay-150 hover:text-pink-500 ">
								<NavLink to="/category/unisex"	>
									Unisex
								</NavLink>
							</div>
						</div>
					</div>
					<div className="flex items-center">{totalProd > 0 ? <CartWidget /> : null}</div>
				</div>
			</div>
		</nav>
	)
}
export default NavBar