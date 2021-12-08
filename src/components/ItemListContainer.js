import { useState, useEffect } from "react"
import {ItemCount} from "./ItemCount"
import {ItemList} from "./ItemList"
import {dbMock} from "../assets/dbMock"


export const ItemListContainer = (props) => {
const [items, setItems] = useState([]);
useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        setItems(dbMock);
      }, 2000);
    });
  }, []);


return (
		<>
			<h2 style={{color: "red"}}>Hola,{props.greeting} </h2>
			<ItemCount stock={10} initial={1}/>
			<ItemList items={items}/>
		</>
	)
}

