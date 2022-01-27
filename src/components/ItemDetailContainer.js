import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../assets/ApiCalls"
import { Grid } from "react-loader-spinner"
const ItemDetailContainer = () => {
	const [ item, setItem ] = useState({})
	const { id } = useParams()
	const [ loading, setLoading ] = useState(true)
	useEffect(() => {
		setLoading(true)
		getItem(id).then((product) => {
			setItem(product)
			setLoading(false)
		})
	}, [ id ])
	return (
			<div className="text-slate-500 flex justify-center items-center">
			{loading
				? <Grid heigth="100" width="100" color="#ec489a" ariaLabel="loading-indicator" />
				: <ItemDetail item={item} />
			 }	
			</div>
	)
}
export default ItemDetailContainer