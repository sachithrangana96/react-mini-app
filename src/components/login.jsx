import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";

 class Login extends Form {

    state = {
        data:{ username:'', password:''},
        errors:{}
    }

   

    // validate = () =>{

    //     const errors = {};

    //     const { data } = this.state;
    //     if(data.username.trim()==='')
    //      errors.username = 'Username is required.';

    //     if(data.password.trim()==='')
    //       errors.password = 'Password is required.';

    //     return Object.keys(errors).length === 0 ? null : errors;  
    // }

   

    

     doSubmit = () => {
         // call the server
         console.log(this.state.data)
     }

    //  validateProperty = ({name,value}) =>{
    //     if(name==='username'){
    //         if(value.trim()==='') return 'Username is required.';
    //     }

    //     if(name==='password'){
    //         if(value.trim()==='') return 'Password is required.';
    //     }
    //  }


   

  

    render() {
        
        return (
            <div>
                <h1>Login</h1>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <form onSubmit={this.handleSubmit}>
                            
                            {this.renderInput("username","Username","text")}
                            {this.renderInput("password","Password","password")}
                            
                           {this.renderButton('Login')}
                        </form>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        )
    }
}
export default Login