import React from 'react'

function ItemCompra({item,value}) {

 const {id ,img , title, price, total} = item;
 const { eliminarItem } = value;
 
 return (
  <div className="row my-1 text-center">
   <div className="col-10 mx-auto col-lg-2">
    <img src={img} 
          alt="item" 
          className="img-fluid"
          style={{width: '5rem',
                  height:'5rem' }}
      />
   </div>
   <div className="col-10 mx-auto col-lg-2">
    <span className="d-lg-none">Titulo: </span>
    {title}
   </div>
   <div className="col-10 mx-auto col-lg-2">
    <span className="d-lg-none">Precio: </span>
    {price}
   </div>
   <div className="col-10 mx-auto col-lg-2">
    <strong> total: $ {total} </strong>
   </div>
   <div className="col-10 mx-auto col-lg-2">
    <div className="cart-icon"
         onClick={() => eliminarItem(id)}>
     <i className="fas fa-trash"></i>
    </div>
   </div>

  </div>
 )
}

export default ItemCompra
