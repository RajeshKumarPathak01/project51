import { useState } from "react";



export const GetMovie = async({params})=>{
   try {
       const url = `https://www.omdbapi.com/?i=${params.movieId}&apikey=8c6850ef`;
      
       const response = await fetch(url);
       if (response.status) {
           const data = await response.json();
           return data;
       } else {
           console.log("Error while fetching data");
       }
   } catch (error) {
    console.log(error.message);
    
   }

    
};



