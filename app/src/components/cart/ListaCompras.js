import React from 'react'
import ItemCompra from './ItemCompra';


function ListaCompras({ value }) {
 const {cart} = value;
 return (
  <div className="container-fluid">
   {cart.map(item => {
    return <ItemCompra key={item.id} value={value} item={item} />
   })}
  </div>
 )
}

export default ListaCompras
