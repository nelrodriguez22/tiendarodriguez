import {Item} from "./Item"
export const ItemList = ({items}) => {
	return ( 
		<>
		<div className="container-fluid">
			<div className="row container-fluid d-flex justify-content-center">	
			   {items.map((item, id) => {
          		return <Item key={id} item={item} />;
        		})}
			</div>
		</div>
		</>

	 );
}
 
export default ItemList;