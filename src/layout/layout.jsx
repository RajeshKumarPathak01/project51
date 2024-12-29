import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import Loader from './loader';
import { useNavigation } from 'react-router';


function Layout() {
  
   
    return (
      <div className=" sm:[100vh] mx-44 sm:mx-0 flex flex-col h-screen bg-white bg-[url('./src/assets/sea.gif')] bg-cover bg-no-repeat  ">
        <Header className="relative">
          <Header />
        </Header>

        <main className="flex flex-wrap justify-center items-center flex-grow-1 flex-shrink-1 overflow-x-hidden overflow-y-auto ">
          <Outlet />
        </main>

        <footer className="relative ">
          <Footer />
        </footer>

        {/* <div>
          <Header />
        </div>

        <div>
          <Outlet />
        </div>

        <div>
          <Footer />
        </div> */}
      </div>
    );
  }

 

export default Layout
