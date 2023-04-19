import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Trusted from "./components/Trusted/Trusted";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MissingPage from "./components/MissingPage/MissingPage";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="*" element={<MissingPage />} />
          <Route
            path="products/item-detail/:id"
            element={<ItemDetailContainer />}
          />
          <Route element={<Footer />}>
            <Route element={<Home />}>
              <Route element={<Trusted />}>
                <Route path="/" element={<Counter />} />
              </Route>
            </Route>
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
