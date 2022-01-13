import { ItemDetail } from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import { getItem } from "../assets/ApiCalls"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const { id } = useParams()



  useEffect(() => {
    getItem(id).then((product) => {
        setItem(product)
    })
  }, [id])

  return (
    <>
		  <div className="text-slate-500">
          <ItemDetail item={item} />
      </div>
    </>
  )
}