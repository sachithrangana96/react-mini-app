/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link,  NavLink  } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" href="#" to="/movies">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" href="#" to="/customers">Customers</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" href="#" to="/rentals">Rentals</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" href="#" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" href="#" to="/register">Register</NavLink>
                    </li>
                   
                </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar