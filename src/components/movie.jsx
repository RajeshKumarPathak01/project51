import React from 'react'
import { NavLink } from 'react-router';
import {movieIcon} from '../assets/moviesIcon.png'

function Movie() {
  return (
    <div className="container justify-center  sm:mx-0 flex text-white bg-slate-500 w-[100vw] h-[100vh] -ml-4 ">
      <div className=" w-[100%] flex flex-col flex-wrap justify-between">
        <div className="  w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold my-8 text-white mb-4 ">
            Welcome to The Movie World
          </h2>
          <hr className="mx-5  my-4" />
          <p className="text-white mb-6">
            Discover and explore a wide variety of movies tailored to your
            preferences. Start your cinematic journey now!
          </p>

          <div className=" sm:flex-col sm:mt-5 flex items-center sm:ml-[2%]  ml-[20%] ">
            <figure>
              <img
                src={movieIcon}
                alt="movieLogo"
                className="w-[250%] h-[50%] my-1  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
              />
            </figure>
            <NavLink
              to="movie"
              className="px-6 py-3 sm:my-[10%] sm:mx-[5%] sm:bg-blue-900 ml-[10%] bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Explore Movies
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie
