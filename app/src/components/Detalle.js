import React, { Component } from 'react'
import {ProductConsumer} from '../context/Context'
import '../css/style.css'
export class Details extends Component {
 render() {
  return (
   <ProductConsumer>
    {(value) => {
     const {id, author, img, info, price, title, inCart
     } = value.detailProduct;
     return(
      <div className="container py-5">
       <div className="row">
        <div className="col-10 mx-auto
        text-center text-slanted text-title my-5">
         <h1>{title}</h1>
        </div>
       </div>
 
       <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
         <img src={img} className="img-fluid" alt="product"/>
        </div>
        {/* product text*/}

        <div className="col-10 mx-auto col-md-6 my-3">
         <h2> Titulo : {title}</h2>
         <h5 className="text-title text-upppercase 
         text-muted mt-3 mb-2">
         Autor : <span className="text-uppercase">
          {author}
         </span>
         </h5>
         <h5>
          <strong>
           Precio : <span>$</span>
           {price}
          </strong>
         </h5>
         <p className="font-weight-bold mt-3 mb-0">
          Descripcion:
         </p>
         <p className="text-muted">{info}</p>
         
         <div className="agregar">
          <button disabled={inCart ? true : false}
                   onClick={()=>{
                    value.addToCart(id)
                   }}>
           {inCart ? 'Agregado' : 'Agregar al carro'}
          </button>
         </div>
        </div>

       </div>
      </div>
     )
    }}
   </ProductConsumer>
  )
 }
}

export default Details
