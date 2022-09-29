import { GlobalStyle } from "./globalStyles";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Topbar from "./components/Topbar";

function App() {
  return (
    
    <div className="App">
      <GlobalStyle/>
      <Topbar/>
      <Home/>
      <Menu/>
    </div>
  );
}

export default App;
