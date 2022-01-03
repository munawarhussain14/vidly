import React, { Component } from "react";
import { useParams } from "react-router-dom";

const MovieForm = () => {
  let params = useParams();
  return (
    <div>
      <h1>Movie Form {params.id}</h1>
      <button className="btn btn-primary" onClick={() => {}}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
