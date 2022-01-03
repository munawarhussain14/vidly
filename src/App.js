import React, { Component } from "react";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/movies/:id" element={<MovieForm />}></Route>
            <Route path="/movies" element={<Movies {...this.props} />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/rentals" element={<Rentals />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
            <Route path="/" replace element={<Navigate to="/movies" />} />
            <Route path="*" replace element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
