import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
//import Cart from "./Pages/Cart";
//import Women from "./Pages/Women";
import ProductPage from "./Pages/ProductPage";
import CategoryFilter from "./Pages/CategoryFilter";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MyShop</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productsByCategory/men">Men</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productsByCategory/women">Women</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="/productsByCategory/:category" element={<CategoryFilter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
