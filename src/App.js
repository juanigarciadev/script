import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";
import Trusted from "./components/Trusted/Trusted";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MissingPage from "./components/MissingPage/MissingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInProcess from "./components/PageInProcess/PageInProcess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            <Route element={<Home />}>
              <Route element={<Trusted />}>
                <Route path="/" element={<Counter />} />
              </Route>
            </Route>
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/faqs" element={<PageInProcess />} />
            <Route path="/contact" element={<PageInProcess />} />
            <Route path="/cart" element={<PageInProcess />} />
          </Route>
          <Route
            path="products/item-detail/:id"
            element={<ItemDetailContainer />}
          />
        </Route>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
