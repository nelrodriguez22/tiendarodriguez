import React from 'react'
import  {CartWidget}  from "./CartWidget";

export const NavBar = () => {
	return (
		<>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a	className="navbar-brand" href="#"	>
						T-Shirts Commerce
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active"	href="#"	>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a	className="nav-link"  href="#"	>
									Categoria 1
								</a>
							</li>
									<li className="nav-item">
								<a	className="nav-link"  href="#"	>
									Categoria 2
								</a>
							</li>
									<li className="nav-item">
								<a	className="nav-link"  href="#"	>
									Categoria 3
								</a>
							</li>
						</ul>
						<CartWidget />
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
