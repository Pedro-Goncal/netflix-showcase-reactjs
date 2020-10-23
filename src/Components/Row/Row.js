import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../../axios"; //called axios but in reality is importing the instance function
import "./Row.css";
const baseImg_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=947b0f0af52c9b74afa43eed2267820d&language=en-US`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTrailerUrl(data.results[0].key);
        })
        .catch((err) => console.log(err));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${baseImg_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

/*
We pass props isLargeRow only on the component we want it to be

we then on the src... we check if isLargeRow is true and render the right image

and on the class name, we check if isLargeRow is true and give it an additional className that we can style diferently

*/
