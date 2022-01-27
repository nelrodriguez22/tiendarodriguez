import  Item  from "./Item"
const ItemList = ({ items }) => {
	return (
		<div className="grid grid-cols-1 gap-6 justify-items-center xl:justify-items-stretch md:grid-cols-2 xl:grid-cols-3 transition-all delay-300">
			{items.map((item, id) => {
				return <Item key={id} item={item} />
			})}
		</div>
	)
}
export default ItemList