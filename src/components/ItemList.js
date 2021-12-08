import {Item} from "./Item"
export const ItemList = ({items}) => {
	return ( 

		


		<>
		<div className="container-fluid">
			<div className="row container-fluid d-flex justify-content-center">	
			   {items.map((items, id) => {
          		return <Item key={id} items={items} />;
        		})}
			</div>
		</div>
		</>

	 );
}
 
export default ItemList;