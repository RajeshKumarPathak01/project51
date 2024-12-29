import React from 'react'
import { useRouteError } from 'react-router'
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';

function Error() {
  
  const navigate=useNavigate();

  const handleGoBack=()=>{
      navigate(-1);
  }
  const {error}=useRouteError;
  
  return (
    <div className=" flex flex-col justify-center bg-white h-[70vh] w-[100vw] items-center">
      <figure>
        <img
          src="/src/assets/Error2.png"
          alt="404 Error"
          className="w-[700px] h-[300px]"
        />
      </figure>
      <p className="text-xl font-bold">
        {" "}
        The Page you are looking for does not exist.
      </p>

      <button
        className="bg-blue-800 text-white py-2 px-2 mx-6 my-4 text-xl rounded-lg"
        onClick={handleGoBack}
      >
        {/* <NavLink to="/">Back To Home Page</NavLink> */}
        Back To Home Page
      </button>
    </div>
  );
}

export default Error
