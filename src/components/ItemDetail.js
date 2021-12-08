import React from 'react'

export const ItemDetail = ({ item }) => {
	return (
		<>
			<div className="card col-4 mt-3 ">
				<div className="d-flex justify-content-center">
					<img className="imgdesc" src={item.image} alt="..." />
				</div>
				<p>{item.description}</p>
				<div className="text-center">
					Precio:${item.price}
				</div>
			</div>
		</>
	)
}
