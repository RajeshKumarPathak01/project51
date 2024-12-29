import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Layout from './layout/layout.jsx'
import { RouterProvider } from 'react-router'
import Error from './layout/error.jsx'
import Movie from './components/movie.jsx'
import Loader from './layout/loader.jsx'
import  Home from "./components/home.jsx";
import { GetMovie } from './components/getMovie.js'
import MovieDetails from './components/movieDetails.jsx'
import { useNavigation } from 'react-router'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <Movie /> },
      { path: "movie", element: <Home /> },
      { path: "movie/:movieId", element: <MovieDetails />, 
         errorElement: < Error />,
        loader: GetMovie ,
       
      },
      { path: "*", element: <Error /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "/movie/:*",
        element: <Error />,
      },
    ],
  },
 
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
