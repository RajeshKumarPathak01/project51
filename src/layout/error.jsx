import React from 'react'
import { useRouteError } from 'react-router'
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';
import errImg from "/src/assets/Error2.png";

function Error() {
  
  const navigate=useNavigate();

  const handleGoBack=()=>{
      navigate(-1);
  }
  const {error}=useRouteError;
  
  return (
    <div className=" flex flex-col justify-center sm:h-[70vh] bg-white h-[70vh] w-[100vw] items-center">
      <figure>
        <img
          src={errImg}
          alt="404 Error"
          className="w-[700px] sm:w-[350px] sm:h-[300px] h-[300px]"
        />
      </figure>
      <p className="text-xl sm:text-lg text-center font-bold">
        {" "}
        The Page you are looking for does not exist.
      </p>

      <button
        className="bg-blue-800 text-white py-2 px-2 sm:my-14 mx-6 my-4 text-xl rounded-lg"
        onClick={handleGoBack}
      >
        {/* <NavLink to="/">Back To Home Page</NavLink> */}
        Back To Home Page
      </button>
    </div>
  );
}

export default Error
