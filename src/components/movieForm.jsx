import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { useParams, useNavigate } from "react-router-dom";

class MovieForm extends Form {
  state = {
    genres: [],
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    console.log(params.entries());
    const genres = getGenres();
    this.setState({ genres });
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.string().required().label("Number In Stock"),
    dailyRentalRate: Joi.string().required().label("Rate"),
  };

  doSubmit = () => {
    console.log(this.state.data);
    console.log("Movies Form Submit");
  };

  render() {
    const { genres } = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.randerButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
