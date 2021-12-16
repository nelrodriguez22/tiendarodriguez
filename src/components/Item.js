import { NavLink } from "react-router-dom";
import '../App.css';

export const Item = ({item}) => {
	return (
		<>	
		
			<div className="card col-4 mt-3">
				<div className="row card-header">
					#{item.id} Nombre:{item.title}
				</div>
				<center><img src={item.image} alt="..." /></center>
			
				
				<div className="text-center">
					Precio:${item.price}
				</div>
					<NavLink className="ct" to={`/item/${item.id}`} >
				Ver Mas
				</NavLink>
			</div>
		

		</>
	  );
}
 
export default Item;