import React, { Component } from 'react'
import firebase from '../config/firebase'
import { withRouter } from 'react-router-dom';
import '../css/style.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email:'',
        password:''
        }
        this.inputRef = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleSubmit(e) {
        e.preventDefault(); 
        console.log(this.state);
        let email = this.state.email;
        let password = this.state.password;

        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log("Login")
            localStorage.setItem('login', JSON.stringify(data.user))
            const { history } = this.props;
            history.push('/')
        })
        .catch(error => {
            console.log("Error", error)
        });
        e.preventDefault();
    }


    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState ({
            [name]: value 
        })
        e.preventDefault(); 
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }



 render() {
  return (
   <div className="container-log-in">
     <div className="header-titulo">
         <h3>Iniciar sesión</h3>
         <hr />
     </div>
     <div className="form">
     <form onSubmit={this.handleSubmit}>  
         <div className="input-group" > 
             <input 
             type="text" 
             name="email" 
             placeholder="Email" 
             ref={this.inputRef}
             value={this.state.email} 
             onChange={this.handleChange}/>

             <input 
             type="password" 
             name="password" 
             placeholder="Contraseña" 
             value={this.state.password} 
             onChange={this.handleChange}/>
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
}

export default withRouter(Login)