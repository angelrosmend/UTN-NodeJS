import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import '../css/style.css'
import firebase from '../config/firebase'


function Signup() {

  const history = useHistory();

  function handleClick(){
      history.push("/signup")
  }

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''
})

  function handleSubmit(e) {

     let email = form.email;
     let password = form.password;
     firebase.auth.createUserWithEmailAndPassword(email, password)
     .then((data) =>{
         console.log("Usuario creado", data.user.uid)
         firebase.db.collection("usuarios").add({
             nombre: form.nombre,
             apellido: form.apellido,
             email: form.email,
             userId: data.user.uid
         })
         .then((data)=>{
             console.log(data)
             history.push('/')
         })  
         .catch((err)=>{
            console.log(err)
            alert(err)
        })
    })
    .catch((error) => {
        console.log("Error", error)
        alert(alert)
    })
    e.preventDefault();
 }

 function handleChange(e){

     const target = e.target;
     const value = target.value;
     const name = target.name;

     setForm({
         ...form,
         [name]:value
     });
     e.preventDefault();
 }

 
  return (
   <div className="container-sign-up">
     <div className="header-titulo">
         <h3>Registro</h3>
         <hr />
     </div>
    <div className="form">
     <form onSubmit={handleSubmit}>
         <div className="input-group" > 

         <input  type="text" 
                 name="nombre"   
                 placeholder="Nombre"  
                 value={form.nombre} 
                 onChange={handleChange}/>

         <input  type="text" 
                 name="apellido" 
                 placeholder="Apellido" 
                 value={form.apellido} 
                 onChange={handleChange}/>
        </div>

        <div className="input-group" > 

        <input type="password" 
               name="password" 
               placeholder="Contraseña" 
               value={form.password} 
               onChange={handleChange}/>
         

          <input type="text" 
                 name="email" 
                 placeholder="Email" 
                 value={form.email} 
                 onChange={handleChange}/>
          </div>
    

         <div className="boton">
            <button type="submit"
                    className="submit-btn" 
                    onClick={handleClick}>
                        REGISTRARSE
            </button>        
         </div>
        </form>
       </div>
      </div>
  )
}

export default Signup
