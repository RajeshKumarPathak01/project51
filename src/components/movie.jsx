import React from 'react'
import { NavLink } from 'react-router';
import movieIcon from '/src/assets/moviesIcon.png'

function Movie() {
  return (
    <div className="container justify-center sm:w-[100%]  flex text-white bg-slate-500 w-[110%] h-[100vh]  -ml-4 ">
      <div className=" w-[100%] flex flex-col flex-wrap justify-between">
        <div className="  w-full sm:w-[100%] text-center px-4">
          <h2 className="text-3xl font-bold my-3 text-white mb-4 sm:mx-[10px] ">
            Welcome to The Movie World
          </h2>
          <hr className="mx-5  my-4" />
          <p className="text-white sm:mx-2 mb-6">
            Discover and explore a wide variety of movies tailored to your
            preferences. Start your cinematic journey now!
          </p>

          <div className=" sm:mt-5   sm:h-[70%] sm:ml-[2%]  ml-[10%]">
            <figure>
              <img
                src={movieIcon}
                alt="movieLogo"
                className="w-[250%] h-[50%] my-1 sm:mb-10 sm:h-[215px] sm:w-[95%] sm:mx-2  max-w-xs sm:max-w-sm "
              />
            </figure>

            <div className='sm:mt-1 -mt-[15%]'>
              <NavLink
                to="movie"
                className="px-6 py-3  sm:my-[10%] sm:mx-[5%] sm:bg-blue-900 ml-[10%] bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 "
              >
                Explore Movies
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie
