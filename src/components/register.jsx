import React, { Component } from 'react'
import Form from "./common/form";
import Joi from 'joi-browser';

class Register extends Form {
    state = {
        data:{ username:'', password:'', name:''},
        errors:{}
    }

    schema = {
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().min(5).label("Password"),
        name:Joi.string().required().label("Password")
    }

    doSubmit = () => {
        // call the server
        console.log(this.state.data)
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username","password")}
                    {this.renderInput("password","Password","password")}
                    {this.renderInput("name","Name","text")}
                    {this.renderButton("Register")}
                </form>
            </div>
        )
    }
}
export default Register