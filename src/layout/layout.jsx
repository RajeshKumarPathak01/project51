import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import Loader from './loader';
import { useNavigation } from 'react-router';
import sea from "/src/assets/sea.gif";


function Layout() {
  
   
    return (
      <div
        className=" sm:h-[74%] mx-44 sm:-mx-2 flex flex-col  h-screen sm:w-[103%] bg-white  bg-cover bg-no-repeat  "
        style={{ backgroundImage: `url(${sea})` }}
      >
        <Header className="relative">
          <Header />
        </Header>

        <main className="flex flex-wrap justify-center sm:w-[103%]  items-center  overflow-x-hidden overflow-y-auto ">
          <Outlet />
        </main>

        <footer className="relative ">
          <Footer />
        </footer>
      </div>
    );
  }

 

export default Layout
