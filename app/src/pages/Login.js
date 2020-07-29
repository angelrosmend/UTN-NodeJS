import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import {NetContext} from '../context/Context'
import '../css/style.css'

function Login({login}) {
    const history = useHistory();
    const context = useContext(NetContext)
    const [form, setForm] = useState({user: '', password: ''});
    const [errors, setError] = useState({user: '', password: ''});
    const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
        setLoading(true);

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                 'Content-type' : 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                context.loginUser(JSON.stringify(result.token))
                history.push('/')
            },
            (error) => {
                console.log(error)
                setLoading(false)
            }
        )

    }

       const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value}
        )
        e.preventDefault();
    }
  return (
   <div className="container-log-in">
     <div className="header-titulo">
         <h3>Iniciar sesión</h3>
         <hr />
     </div>
     <div className="form">
     <form onSubmit={handleSubmit}>  
         <div className="input-group" > 
             <input 
             type="text" 
             name="user" 
             placeholder="Email" 
             value={form.user} 
             onChange={handleChange}/>

             <input 
             type="password" 
             name="password" 
             placeholder="Contraseña" 
             value={form.password} 
             onChange={handleChange}/>
         </div>
         <div className="boton">
            <button 
            type="submit" 
            className="submit-btn">
            
            ACCEDER
            </button>
       </div>
      </form>
     </div>
    </div>
    )
}

export default Login