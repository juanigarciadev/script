import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error404 from "./components/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInProcess from "./components/PageInProcess/PageInProcess";
import Faq from "./components/Faq/Faq";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route
                path="/products/:category"
                element={<ItemListContainer />}
              />
              <Route path="/faqs" element={<Faq />} />
            </Route>
            <Route
              path="products/item-detail/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/contact" element={<PageInProcess />} />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
