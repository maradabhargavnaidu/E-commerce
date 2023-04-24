import "./App.css";
import ProductsData from "./components/productsData";
import Navbar from "./components/Navbar";
// import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsData />
    </div>
  );
}

export default App;
