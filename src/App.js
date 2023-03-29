import "./index.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Counter } from "./components/Counter/Counter";
import { Social } from "./components/Social/Social";
import { Footer } from "./components/Footer/Footer";
import { ItemList } from "./components/ItemList/ItemListContainer";

function App() {
  let greetings = "Hello, welcome again!";

  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemList greetings={greetings} />
      <Social />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
