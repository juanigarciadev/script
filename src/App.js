import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Counter from "./components/Counter/Counter";
// import Trusted from "./components/Trusted/Trusted";
// import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
