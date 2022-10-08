import { GlobalStyle } from "./globalStyles";
import { BrowserRouter} from 'react-router-dom'
import Navigation from "./pages/Navigation";
import { CartContextStore } from "./contexts/CartContext";

function App() {

  return (
    <BrowserRouter className="App">
      <CartContextStore>
        <GlobalStyle/>
        <Navigation/>
      </CartContextStore>
    </BrowserRouter>
  );
}

export default App;
