import React from 'react'

function ListaInfo() {
 return (
  <div className="container-fluid text-center d-none d-lg-block my-5">
   <div className="row">
    <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">Libro</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">Titulo</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">Precio</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">Total</p>
    </div>
    <div className="col-10 mx-auto col-lg-2">
     <p className="text-uppercase">Eliminar</p>
    </div>
   </div>
  </div>
 )
}

export default ListaInfo
