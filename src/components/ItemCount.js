import React, {  useState} from "react"


export const ItemCount = ({stock, initial, onEvent }) => {
  const [counter, setCounter] = useState(initial)
  const [add, setAdd] = useState(0)



  const onAdd = () => {
    if (add + counter <= stock) {
      setAdd(add + counter)
		onEvent(counter)
    }else{
		 alert("No hay suficientes productos")
	 }
  }

  const handleDecrement = () => {
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)
  }

  const handleIncrement = () => {
    if (counter === stock) {
      return
    }
    setCounter(counter + 1)
  }


  return (
    <div className="">
      <div className="text-center">Carrito</div>
      <div className="text-center">Stock :{stock}</div>
      <div className="d-flex align-center justify-content-center ">
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-outline-secondary"
        >
          -
        </button>
        <span className="text-center col-sm-6">{counter}</span>
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-outline-secondary"
        >
          +
        </button>
      </div>
      <button onClick={onAdd} className="btn btn-outline-secondary">
        Agregar Al carrito
      </button>
    </div>
  )
}
 
export default ItemCount