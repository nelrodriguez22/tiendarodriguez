import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";



function App() {
  return (
    <>
	<BrowserRouter>
		<NavBar />
		<Home />
	</BrowserRouter>
    </>
  );
}

export default App;
