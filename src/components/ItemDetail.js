import React from 'react'
import { useNavigate } from "react-router-dom";


export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
	return (
		<div className="container-fluid d-flex flex-column">
			<div>
				<button 
				className="btn btn-outline-primary mt-3 ms-4" 
				onClick={() => navigate(-1)}
				>
				Regresar
				</button>
			</div>
			<div className="card col-4 mt-3 ">
				<div className="d-flex justify-content-center">
					<img className="" src={item.image} alt="..." />
				
				</div>
				<p>{item.description}</p>
				<div className="text-center">
					Precio:${item.price}
				</div>
			</div>
		</div>
	)
}
