import Home from "./components/Home/Home";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import LoginContainer from "./components/Login/LoginContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import Error404 from "./components/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInProcessContainer from "./components/PageInProcess/PageInProcessContainer";
import FaqContainer from "./components/Faq/FaqContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/Cart/CartContainer";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route
                path="/products/:category"
                element={<ItemListContainer />}
              />
              <Route path="/faqs" element={<FaqContainer />} />
            </Route>
            <Route
              path="/products/item-detail/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/contact" element={<PageInProcessContainer />} />
            <Route path="/log-in" element={<LoginContainer />} />
            <Route path="/sign-up" element={<RegisterContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
