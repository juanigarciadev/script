import "./App.scss";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
import { Social } from "./components/Social";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Social />
      <Counter />
    </div>
  );
}

export default App;
