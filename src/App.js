import "./App.scss";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Counter />
    </div>
  );
}

export default App;
