import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'


class Navbar extends Component {
 render() {
  return (
   <header className="navbar">

    <div className="logo">
    <Link className="nav-link" to={'/'}><h5>The Bookshop</h5></Link>
    </div>
    <nav className="nav">
    <ul className="nav-links">
     <li>
      <Link className="nav-link"
              to={'/'}>Libros
       </Link>
     </li>
     <li>
      <Link className="nav-link" 
             to={'/login'}>Login
       </Link>
     </li>
     <li>
      <Link className="nav-link" 
                   to={'/signup'}>Registro
        </Link>
     </li>
     <li>
     <Link to="/cart" className="nav-link cart">
      <i className="fas fa-cart-plus" />
    </Link>
     </li>
    </ul>
    </nav>
   </header>
  )
 }
}

export default Navbar
