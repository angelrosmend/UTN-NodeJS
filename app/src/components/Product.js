import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'
import { GlobalConsumer } from '../context/Context';

class Product extends Component {


 render() {
  const {id, title, img, price, inCart} = this.props.product;

  return (
   <div className="product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div className="card">
   <GlobalConsumer>
     {value => (
        <div className="img-container p-5"
          onClick={()=> 
             value.handleDetail(id)
          }>
         <Link to="/details">
          <img src={img} alt="product" className="card-img-top"></img>
         </Link>
         <button className="cart-btn-min"
                 onClick={()=> {
                         value.addToCart(id);
                 }}
         >
          {inCart ? (<p className="mb-0">
           {" "}
           En carrito
           </p>):(<i className="fas fa-cart-plus" />
          )}
         </button>
  </div>
)}
     </GlobalConsumer>
     <div className="card-footer d-flex justify-content-between">
     <p className="align-self-center mb-0">{title}</p>
     <h5 className="font-italic mb-0">
      <span className="mr-1">$
      </span>
     {price}
     </h5>
     </div>
    </div>
   </div>
  )
 }
}

export default Product
