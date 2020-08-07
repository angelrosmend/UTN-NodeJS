import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import  Cart  from './components/Cart'
import Default  from './components/Default'
import Detalle  from './components/Detalle'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalState } from './context/Context';


class App extends Component {
  render(){
  return (
    <GlobalState>
      <Router>
      <Fragment>
      <Navbar/>
      <Redirect from={"/"} to={"/signup"}/>
       <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Detalle}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route component={Default}/>
       </Switch>
      </Fragment>
     </Router>
    </GlobalState>
  );
  }
}

export default App;
