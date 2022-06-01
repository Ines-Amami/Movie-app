import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList.js";
import AddMovie from "./Components/AddMovie/AddMovie.js";
import Filter from "./Components/Filter/Filter.js";
import { movies } from "./data.js";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

function App() {
  const [moviesList, setMoviesList] = useState(movies);
  const [rate, setRate] = useState(0);
  const [search, setsearch] = useState("");
  const getNewMovie = (newM) => {
    setMoviesList([...moviesList, { ...newM, id: moviesList.length }]);
  };
  const handleDclick = () => {
    setMoviesList([]);
  };
  const deleteMovie = (idDel) => {
    setMoviesList(moviesList.filter((el) => el.id !== idDel));
  };
  return (
    <div className="App">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/Black-Panther.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="movie-info">
              <h1>Black Panther</h1>
              <ul className="genre" style={{ marginLeft: "130px" }}>
                <li>horror</li>
                <li>sci-fi</li>
                <li>action</li>
              </ul>
              <button style={{ marginLeft: "180px" }}>watch trailer </button>
              <h3>In theaters</h3>
              <h4>11.11.2021</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/Spider-Man.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="movie-info">
              <h1>Spider-Man</h1>
              <ul className="genre" style={{ marginLeft: "130px" }}>
                <li>horror</li>
                <li>sci-fi</li>
                <li>action</li>
              </ul>
              <button style={{ marginLeft: "180px" }}>watch trailer </button>
              <h3>In theaters</h3>
              <h4>11.11.2021</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/iron-man-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="info">
            <div className="movie-info">
              <h1>Iron Man</h1>
              <ul className="genre" style={{ marginLeft: "130px" }}>
                <li>horror</li>
                <li>sci-fi</li>
                <li>action</li>
              </ul>
              <button style={{ marginLeft: "180px" }}>watch trailer </button>
              <h3>In theaters</h3>
              <h4>11.11.2021</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="List">
        <ul className="options">
          <li className="op">in theaters</li>
          <li className="op">coming soon</li>
          <li className="op">charts</li>
          <li className="op">tv series</li>
          <li className="op">trailers</li>
          <li className="op">more</li>
        </ul>
        <div className="topnav">
          <Filter setsearch={setsearch} setRate={setRate} rate={rate} />
        </div>
        {moviesList.length ? (
          <MovieList
            movies={moviesList.filter(
              (el) =>
                el.title
                  .toLocaleLowerCase()
                  .includes(search.trim().toLowerCase()) && el.rating >= rate
            )}
            deleteMovie={deleteMovie}
          />
        ) : (
          <h1 style={{ marginLeft: "650px" }}>no movies</h1>
        )}
        <div className="Bnt">
          <Button variant="primary" onDoubleClick={handleDclick}>
            Clear all
          </Button>
          <AddMovie getNewMovie={getNewMovie} />
        </div>
      </div>
    </div>
  );
}

export default App;
