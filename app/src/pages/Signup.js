import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import '../css/style.css'


function Signup({data}) {

  const history = useHistory();
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    user: '',
    password: ''
  })
  const [errors,setError] = useState({
      name:'',
      lastname: '',
      user:'',
      password:''})
  const [loading,setLoading] = useState(false)



  const handleSubmit = async(e) => {
      console.log(form)

      if(form.name === ''){
          setError({
              ...errors,
              name: 'El nombre es obligatorio'
          })
      }
      setLoading(true)

      fetch('http://localhost:3000/signup',{
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(form)
      })
      .then(res => res.json())
      .then(
          (result)=>{
          console.log(result)
          history.push('/login')
          setLoading(false)
      },
      (error) => {

        }
     )
     e.preventDefault();
 }


const handleChange = (e) =>{

     setForm({
         ...form,
         [e.target.name]:e.target.value
     });
     e.preventDefault();
 }

 
  return (
   <div className="container-sign-up">
     <div className="header-titulo">
         <h3>Registro</h3>
         <hr/>
     </div>
    <div className="form">
     <form onSubmit={handleSubmit}>
         <div className="input-group" > 

         <input  type="text" 
                 name="name"   
                 placeholder="Nombre"  
                 value={form.name} 
                 onChange={handleChange}/>

         <input  type="text" 
                 name="lastname" 
                 placeholder="Apellido" 
                 value={form.lastname} 
                 onChange={handleChange}/>
        </div>

        <div className="input-group" > 

        <input type="text" 
                 name="user" 
                 placeholder="Email" 
                 value={form.user} 
                 onChange={handleChange}/>

        <input type="password" 
               name="password" 
               placeholder="Contraseña" 
               value={form.password} 
               onChange={handleChange}/>
         
          </div>
    

         <div className="boton">
            <button type="submit"
                    className="submit-btn">
                        REGISTRARSE
            </button>        
         </div>
        </form>
       </div>
      </div>
  )
}

export default Signup
