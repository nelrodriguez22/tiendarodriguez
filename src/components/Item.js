export const Item = ({items}) => {
	return (
		//id, title,price, pictureUrl
		<>	
		
			<div className="card col-4 mt-3">
				<div className="row card-header">
					#{items.id} Nombre:{items.title}
				</div>
				<img src={items.pictureUrl} alt="..." />
				<button className="btn btn-outline-primary">Ver Mas</button>
				<div className="text-center">
					Precio:${items.price}
				</div>
			</div>
		

		</>
	  );
}
 
export default Item;