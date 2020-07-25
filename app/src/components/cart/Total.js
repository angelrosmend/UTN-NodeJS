import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


function Total({value}) {
 const {total, limpiarLista } = value;
 return (
  <Fragment>
   <div className="container">
    <div className="row">
     <div className="col-10 mt-2
     ml-sm-5 ml-md-auto text-right">
       <h5 mb-1>
       <span>
        Total :
       </span>
      <strong> $ {total} </strong>
      </h5>
      <Link to="/">
       <button
       className="btn btn-outline-danger text-uppercase"
       type="button"
       onClick={() => limpiarLista()}>
        Limpiar Lista
       </button>
      </Link>
     </div>
    </div>
   </div>
  </Fragment>
 )
}

export default Total
