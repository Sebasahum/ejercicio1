import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import About from "../pages/about";
import Cart from "../pages/cart";
import Store from "../pages/store";
import Navegacion from "./navegacion";

 const Header = () => {
  return (
    <div>
     
      <Router>
      <Navegacion/>
    <Switch>
  <Route exact  path="/about " component={About}/> 
  <Route exact  path="/store " component={Store}/> 
  <Route exact  path="/contacto " component={Cart}/> 

  
  

    </Switch>

      </Router>


    </div>
  );
}
export default Header;