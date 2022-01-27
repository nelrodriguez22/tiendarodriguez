import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {
	getItems,
	men,
	women,
	unisex
} from "../assets/ApiCalls"
import { Grid} from "react-loader-spinner"
const ItemListContainer = () => {
	const { id } = useParams()
	const [ items, setItems ] = useState([])
	const [ loading, setLoading ] = useState(true)
	useEffect(() => {
		if (!id) {
			setItems([])
			setLoading(true)
			getItems()
				.then((data) => {
					setItems(data)
					setLoading(false)
				})
		} else if (id === "masculina") {
			setItems([])
			setLoading(true)
			men()
				.then((data) => {
					setItems(data)
					setLoading(false)
				})
		} else if (id === "femenina") {
			setItems([])
			setLoading(true)
			women()
				.then((data) => {
					setItems(data)
					setLoading(false)
				})
		} else if (id === "unisex") {
			setItems([])
			setLoading(true)
			unisex()
				.then((data) => {
					setItems(data)
					setLoading(false)
				})
		}
	}, [ id ])
	return (
		<div className="mt-1 text-slate-500 items-center justify-center flex">
			{loading
				? <Grid heigth="100" width="100" color="#ec489a" ariaLabel="loading-indicator" />
				: <ItemList items={items} />
			}
		</div>
	)
}
export default ItemListContainer

