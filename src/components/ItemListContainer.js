import {ItemCount} from "./ItemCount"




export const ItemListContainer = (props) => {
	return (
		<>
			<h2 style={{color: "red"}}>Hola,{props.greeting} </h2>
			<ItemCount stock={10} initial={1}/>
		</>
	)
}

