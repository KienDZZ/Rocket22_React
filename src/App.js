import "./App.css";
import Menu from "./Components/Menu/menu";
import { route } from "./Components/Routes/route";

function App() {
  return (
    <div className="App">
      <Menu/>
      {route}
    </div>
  );
}

export default App;
