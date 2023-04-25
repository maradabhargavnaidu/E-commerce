import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
