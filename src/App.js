import { GlobalStyle } from "./globalStyles";
import { BrowserRouter} from 'react-router-dom'
import Navigation from "./pages/Navigation";

function App() {
  return (
    
    <BrowserRouter className="App">
      <GlobalStyle/>
      <Navigation/>
    </BrowserRouter>
  );
}

export default App;
