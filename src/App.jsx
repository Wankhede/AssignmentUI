import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const App = () => {
  
  return (
    <Router>
        <div className="App">
        
         <Switch>
           <Route exact path='/' component={Home}></Route>
           <Route exact path='/cart' component={Cart}></Route>
           <Route exact path='/:book' component={Product}></Route>
           <Route exact path='/list/:id' component={ProductList}></Route>

           {/* <Route exact path='/contact' component={Contact}></Route> */}
         </Switch>
       </div>
    </Router>
  );
};

export default App;