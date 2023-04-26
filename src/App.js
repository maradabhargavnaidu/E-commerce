import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import View from "./Pages/View";
import Category from "./Pages/Category";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<View />} />
          <Route path="/category/:product" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
