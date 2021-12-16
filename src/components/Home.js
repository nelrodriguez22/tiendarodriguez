import  {ItemListContainer} from "./ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";

const Home = () => {
	return ( 
		<>
		<Routes>
			<Route exact path="/category/:id" element={<ItemListContainer />} />
			<Route exact path="/item/:id" element={<ItemDetailContainer />} />
			<Route path="/Cart" element={<Cart />} />
			<Route path="/" element={<ItemListContainer />} />
      </Routes>
		</>
	 );
}
 
export default Home;