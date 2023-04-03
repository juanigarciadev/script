import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Counter } from "./components/Counter/Counter";
import { Trusted } from "./components/Trusted/Trusted";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { useState } from "react";

function App() {
  //Saludo
  let greetings = "Hello, welcome again!";

  //Logica contador
  const [quantity, setQuantity] = useState(0);

  function sumar() {
    setQuantity(quantity + 1);
  }

  function restar() {
    setQuantity(quantity - 1);
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemListContainer
        greetings={greetings}
        sumar={sumar}
        restar={restar}
        quantity={quantity}
      />
      <Trusted />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
