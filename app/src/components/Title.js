import React from 'react'

function Title({title}) {
 return (
  <div className="row">
   <div className="col-10 mx-auto my-2 text-center">
    <h1 className="font-weight-bold">
      <strong>
      {title}
     </strong>
    </h1>
    </div>  
  </div>
 )
}

export default Title
