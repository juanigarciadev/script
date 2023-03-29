import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Counter } from "./components/Counter/Counter";
import { Trusted } from "./components/Trusted/Trusted";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";

function App() {
  let greetings = "Hello, welcome again!";

  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemListContainer greetings={greetings} />
      <Trusted />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
