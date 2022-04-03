import React, { Component } from 'react'
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from './components/movie';
import NavBar from './components/navBar'
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import Login from "./components/login";
import Register from "./components/register";
import './App.css';






class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies/:id" element={<MovieForm />}  />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />}/>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/movies" />} />
          <Route path="*" element={<Navigate to="/not-found" />}  />
        </Routes>   */}
        <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
      </main>
    </React.Fragment>
    )
  }
}


export default App;