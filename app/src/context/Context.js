import React, { Component } from 'react'
import { storeProducts, detailProduct} from '../data'

const NetContext = React.createContext({});


class GlobalState extends Component {

 state = {
  login: localStorage.getItem('login'),
  products: [],
  detailProduct: detailProduct,
  cart: [],
  total: 0
 };

 loginUser = token => {
   this.setState({
     login: true
   })
   localStorage.setItem('token', token)
   localStorage.setItem('login', this.state.login)
  }

  logoutUser = () => {
    this.setState({
      login: false
    })
    localStorage.removeItem('login')
  }

 componentDidMount() {
  this.setProducts();
 }


 setProducts = () => {
  let tempProducts = [];
  storeProducts.forEach(item =>{
   const singleItem = {...item};
   tempProducts = [...tempProducts, singleItem];
  });
  this.setState(() => {
   return {products: tempProducts}
  })
 }

 getItem = id => {
  const product = this.state.products.find(item => item.id === id);
  return product;
 };

 handleDetail = (id) =>{
  const product = this.getItem(id);
  this.setState(() => {
   return {detailProduct: product}
  })
 };

 addToCart = (id) =>{
  let tempProducts = [...this.state.products];
  const index = tempProducts.indexOf(this.getItem(id));
  const product = tempProducts[index];
  product.inCart = true;
  const price = product.price;
  product.total = price;

  this.setState(()=> {
   return { products: tempProducts,
            cart: [...this.state.cart,
                       product]};
  },
  () => {
   this.calcularTotal();
  }
  );
 };

 eliminarItem = (id) => {
   let tempProducts = [...this.state.products];
   let tempCart = [...this.state.cart];

   tempCart = tempCart.filter(item => item.id !== id);

   const index = tempProducts.indexOf(this.getItem(id));
   let eliminado = tempProducts[index];
   eliminado.inCart = false;
   eliminado.total = 0;

   this.setState(()=>{
    return {
     cart: [...tempCart],
     products: [...tempProducts]
    }
   },
   ()=>{
    this.calcularTotal();
   })
 } 
 
 limpiarLista = () =>{
  this.setState(() => {
   return {cart: []}
  },
  () =>{
   this.setProducts();
   this.calcularTotal();
  }

  )
 }

 calcularTotal = () => {
  let total = 0;
  this.state.cart.map(item => total += item.total);
  this.setState(()=>{
   return {
    total: total
   }
  })
 }

 render() {
  return (
   <NetContext.Provider value={{
    ...this.state,
        login:this.state.login,
        loginUser: this.loginUser,
        logoutUser: this.logoutUser,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        eliminarItem: this.eliminarItem,
        limpiarLista: this.limpiarLista
   }}>
    {this.props.children}
   </NetContext.Provider>
  )
 }
}

const GlobalConsumer = NetContext.Consumer;

export {NetContext, GlobalState, GlobalConsumer};
