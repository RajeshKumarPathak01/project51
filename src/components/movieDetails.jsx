import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { GobackFunction } from "./useGoBack";
import { useNavigate } from "react-router";
import { useNavigation } from "react-router";
import Loader from "../layout/loader";

function MovieDetails() {
  const navigate = useNavigate();
  const data = useLoaderData();
 const navigation=useNavigation();
//  const isLoading = navigate.state === "loading";
const [isLoading,setIsloading]=useState(true)
 console.log("Navigation State", navigation.state);

  //  useEffect(()=>{
  //   if(data){
  //     setIsloading(false);
  //   }
  //  },[data])
 

 if (!data) {
   return <div>Error: Unable to fetch movie details</div>;
 }

  useEffect(()=>{

   const timeOut = setTimeout(()=>{
     setIsloading(false)
   },1000)

   return ()=>clearTimeout(timeOut);

  },[])

  const {
    Poster,
    Actors,
    BoxOffice,
    Country,
    Awards,
    Plot,
    Released,
    Title,
    Runtime,
    Year,
    imdbRating,
    Genre,
  } = data;

  return (
    <div className=" w-[100%]  mx-2 sm:h-fit overflow-x-hidden  overflow-y-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <div id="main">
          <div className=" sticky w-full " id="btn">
            <button
              className="bg-blue-700  text-white py-2 px-4  my-4 text-xl rounded-lg hover:bg-blue-500  fixed sm:right-[18%] right-[18%]"
              onClick={() => navigate(-1)}
            >
              {" "}
              Back{" "}
            </button>
          </div>

          <div
            className=" container flex  flex-wrap sm:flex-col sm:h-[full]  flex-row mx-2 rounded-lg "
            id="image + content"
          >
            <div
              className=" w-[32%]  sm:w-[88%] sm:h-[100%] h-[90%]  "
              id="image"
            >
              <img
                src={Poster}
                alt={Title}
                className="w-[350px] h-[700px] sm:mx-6 sm:w-[100%] sm:my-2 sm:shadow-2xl sm:border-2 sm:shadow-black rounded-lg mx-14 shadow-2xl shadow-black "
              />
            </div>
            <div
              className=" border-blue-500 sm:h-[100%] sm:w-[95%] sm:my-8  sm:-ml-0 sm:shadow-xl sm:shadow-black sm:max-h-full  sm:mx-2 w-[50%] mx-20  rounded-lg bg-blue-900 text-white"
              id="content"
            >
              <table className="my-5 mx-8 text-wrap mr-2  ">
                <tr>
                  <td> Title</td>
                  <td>{Title}</td>
                </tr>
                <tr>
                  <td> Actors</td>
                  <td>{Actors}</td>
                </tr>
                <tr>
                  <td> Title</td>
                  <td>{Title}</td>
                </tr>

                <tr>
                  <td> Plot</td>
                  <td>{Plot}</td>
                </tr>
                <tr>
                  <td> Genre</td>
                  <td>{Genre}</td>
                </tr>

                <tr>
                  <td> Awards</td>
                  <td>{Awards}</td>
                </tr>
                <tr>
                  <td> BoxOffice</td>
                  <td>{BoxOffice}</td>
                </tr>

                <tr>
                  <td> Runtime</td>
                  <td>{Runtime}</td>
                </tr>
                <tr>
                  <td> Released</td>
                  <td>{Released}</td>
                </tr>
                <tr>
                  <td> Imdb-Rating</td>
                  <td>{imdbRating}</td>
                </tr>
                <tr>
                  <td> Country</td>
                  <td>{Country}</td>
                </tr>
                <tr>
                  <td> Year</td>
                  <td>{Year}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
