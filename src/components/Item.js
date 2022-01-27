import { NavLink } from "react-router-dom"
import '../App.css'

const Item = ({ item }) => {
	return (
		<>
			<div className="mt-10 ml-10 mr-10 bg-white rounded-lg  border border-pink-100 shadow-sm shadow-pink-100 overflow-hidden flex justify-items-center hover:shadow-none transition-all delay-200">
				<img className="" src={item.image} alt="..." />
				<div className="p-3 grow flex flex-col justify-around">
					<h5 className="mb-2 text-md font-light tracking-tight basis-2">
						<span className="bg-gray-200 rounded p-1">#{item.id}</span>
						<span className="font-medium text-xl"> {item.title}</span>
					</h5>
					<p className="text-center text-xl mt-5 mr-7 basis-4"><span className="font-bold text-3xl">${item.price}</span></p>
					<NavLink className="text-sm " to={`/item/${item.id}`} >
						<span className="mt-3 block text-center rounded p-1 outline outline-1 transition-all text-pink-500 outline-pink-500 hover:bg-pink-500 hover:text-white">Ver Mas
						</span>
					</NavLink>
				</div>
			</div>
		</>
	)
}
export default Item