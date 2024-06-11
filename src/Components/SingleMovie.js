import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../Context/context";
import Loader from '../Assets/loader.gif';

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    var timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [id]);

  if(isLoading){
    return(
      <div className="movie-section">
        <div className="loading d-flex justify-content-center">
          <img src={Loader} alt="" width='80' />
        </div>
      </div>
    )
  }
  
  return (
    <>
      <section className="d-flex justify-content-center">
        <div className="card mt-4" style={{width:'55%',cursor:'pointer'}}>
          <div className="row">
            <div className="col-md-5">
            <figure>
              <img src={movie.Poster} alt={movie.imdbID} />
            </figure>
            </div>
            <div className="col-md-7">
            <div className="card-body">
              <p>{movie.Title}</p>
              <p>{movie.Released}</p>
              <p>{movie.Genre}</p>
              <p>{movie.imdbRating}</p>
              <p>{movie.Country}</p>
              <NavLink to="/"><button className="btn btn-primary">Go Back</button></NavLink>
            </div>
            </div>
          </div>
           
            
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
