import React, {Fragment, Component, useContext, useState } from 'react'
import Product from './Product'
import Title from './Title'
import { GlobalConsumer, NetContext } from '../context/Context'

function ProductList () {

 const context = useContext(NetContext)

 if(context.login){

 fetch('http://localhost:3000/products', {
  method: 'GET',
  headers: {
       'Content-type' : 'application/json',
       'x-access-token' : localStorage.getItem('token')
  }
})
.then(res => res.json())
.then(
  (result) => {
      console.log("result", result)
  },
  (error) => {

  }
 )
}
 
  return (
   <Fragment>
    <div className="py-5">
     <div className="container">
     <Title title="Nuestros libros en store" /> 
      <div className="row">
       <GlobalConsumer>
        {value => {
         return value.products.map(product =>{
          return <Product key={product.id} product={product} />
         });
        }}
       </GlobalConsumer>
      </div>
     </div>
    </div>
   </Fragment>
  )
 }

export default ProductList
