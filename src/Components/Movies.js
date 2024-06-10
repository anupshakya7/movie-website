import React from "react";
import { useGlobalContext } from "../Context/context";
import { NavLink } from "react-router-dom";
import Loader from '../Assets/loader.gif';
import '../App.css';

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

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
      <section className="mt-4">
        <div className="row">{movie.map((curMovie) => {
          const {imdbID,Title,Poster} = curMovie;
          const movieName = Title.length > 15 ? `${Title.substring(0,15)}...`:Title;
          return(
            <div className="col-md-3 my-2" key={imdbID}>
              <NavLink to={`movie/${imdbID}`}>
                  
                    <div className="card h-100">
                      <img src={Poster} alt={imdbID}  height='100%'/>
                      <h4 className="text-center">{movieName}</h4>
                    </div>
                  
              </NavLink>
              </div>
          )
        })}</div>
      </section>
    </>
  );
};

export default Movies;
