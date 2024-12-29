import React, { useEffect, useRef, useState } from "react";
import Loader from "../layout/loader";
import { useLoaderData, useNavigation } from "react-router";
import { NavLink } from "react-router";



function Home() {
  const [movieData, setMovieData] = useState({});
  const [inputBox, setInputBox] = useState("");
  let timeoutId = useRef(null);
  const [loader, setLoader] = useState(null);
  const [errMsg, setErrMsg] = useState(false);


  const data = useLoaderData();
  const vite_url = `https://www.omdbapi.com/?apikey=8c6850ef&s=${inputBox}`;
  const hadleSearch = async () => {
     setLoader(true);
    const response = await fetch(vite_url);
    const data = await response.json();

    if (data.Response === "True") {
      setInputBox("");
      setLoader(false);
      setErrMsg(false);
      return setMovieData(data.Search);
    } else {
      setErrMsg(true);
      setLoader(false);
      setMovieData({});
      console.log("Error while fetching");
      return [];
    }
  };

  const triggerSearch = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      hadleSearch();
    }
  };

  const handleSearchBoxCall = (evnt) => {
    let val = evnt.target.value;
    setInputBox(val);
  };

  const navi = useNavigation();

  if (loader) {
    return <Loader />;
  }
  return (
    <div className="container justify-between sm:h-fit ">
      <div className="container justify-between h-fit mb-[30%] sm:h-fit">
        <div className="flex flex-col my-8 items-center justify-center">
          <input
            className="mx-10 w-[50%] py-4 text-center outline-none border-b-2 border-blue-500 rounded-lg  text-xl text-[30px]"
            type="text"
            name="movieSearch"
            id="movieSearch"
            placeholder="Search your Favourite Movie"
            onChange={(e) => handleSearchBoxCall(e)}
            value={inputBox}
            autocomplete="off"
            onKeyDown={triggerSearch}
          />
          <button
            type="submit"
            className="w-[50%] mt-6 bg-blue-900
           text-white py-2 mx-10 text-xl rounded-lg hover:bg-blue-700 hover:text-[22px]"
            onClick={hadleSearch}
          >
            Search
          </button>
        </div>
        <div className="my-2 mx-[25%] ">
          {errMsg ? (
            <p className="text-red-500 text-xl font-bold w-full">
              {" "}
              Entered movie is not found. Please try again.
            </p>
          ) : null}
        </div>

        <div className="container   sm:mx-[8%] ">
          {movieData.length > 0 &&
            movieData.map((item, key) => {
              return (
                <div
                  className="flex-wrap inline-flex sm:ml-0 sm:mx-3 mx-14 my-2 py-1"
                  key={key}
                >
                  <NavLink to={`${item.imdbID}`}>
                    <div className="sm:border-2 sm:w-[100%]  border-1 sm:hover:scale-105  hover:scale-105  shadow-black shadow-xl border-black bg-white mb-5 rounded-lg sm:-mx-0 ">
                      <img
                        src={item.Poster}
                        alt={item.Title}
                        id="img"
                        className="w-[210px] sm:h-[230px]  sm:w-[92%] border-2  sm:object-center  mt-3   h-[250px] flex flex-wrap  mx-8  rounded-lg sm:mx-0 my-2 "
                      />
                      <div className="bg-blue-900 rounded-lg mb-2 hover:bg-blue-700 ">
                        <p className=" text-white font-bold sm:w-[100%] text-center text-wrap mx-1  py-0 w-[95%] mt-2">
                          {item.Title.slice(0, 18)}
                        </p>{" "}
                        <p className=" text-white font-bold text-center text-wrap mx-2 my-2 w-[95%] mb-2">
                          View Details
                        </p>{" "}
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
