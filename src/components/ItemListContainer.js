import {  useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

import {
  getItems,
  men,
  women,
  unisex
} from "../assets/ApiCalls"


export const ItemListContainer = () => {
  const { id } = useParams()
  const [items, setItems] = useState([])



  useEffect(() => {
    if (!id) {
      setItems([])
      getItems()
		.then((data) => {
		setItems(data)
      })
    } else if (id === "masculina"){
      setItems([])
      men()
		.then((data) => {
		setItems(data)
      })
    } else if (id === "femenina"){
      setItems([])
      women()
		.then((data) => {
		setItems(data)
      })
	 } else if (id === "unisex"){
		 setItems([])
		 unisex()
		 .then((data) => {
		setItems(data)
		 })
	 }
  }, [id])

  return (
	  <div className="mt-1 text-slate-500 ">
		  <ItemList items={items} />
	  </div>
    
  )
}
