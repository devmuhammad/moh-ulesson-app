import React, {Component,Fragment, useEffect} from 'react';
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {BsBell} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'
import LoadingBar from 'react-redux-loading-bar';
import Logo from '../../public/svg-disp'
import { useHistory } from 'react-router';
// import {BsBell} from 'react-icons/bs'


const Navbar = styled.div`
    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
`


const Layout = ({screens, children}) => {
  const history = useHistory()

    const [userDetails, setUser] = React.useState({
        name: "Moh Ola",
        email: "mohola@gmail.com"
    })
    const [openPanel, setPanel] = React.useState(false)


return (
<div>

  <nav className="bg-navy md:sticky">
    
    <Navbar className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center cursor-pointer" onClick={() => history.replace('/')}>
          <div className="flex items-center">
              <Logo />&nbsp;
              <h1 className="font-semibold text-3xl p-3 text-white"> uLesson</h1>
          </div>
          
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">

            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div className="flex items-center">
                <button onClick={()=> setPanel(!openPanel)} id="user-menu" aria-haspopup="true" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ">
                  <span className="sr-only">Open user menu</span>
                  <MdAccountCircle className="text-4xl text-white "/>
                </button>&nbsp;
                <span className="text-gray-400"> Devmuhammad</span>
              </div>
              {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              {openPanel && <div role="menu" aria-orientation="vertical" aria-labelledby="user-menu" className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>

                <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>

                <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
              </div>}
            </div>
          </div>
        </div>


        {/* FOR MOBILE */}
        <div className="-mr-2 flex md:hidden">
          {/* <!-- Mobile menu button --> */}
          <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ">
            <span className="sr-only">Open main menu</span>
           
          </button>
        </div>
      </div>
    </Navbar>


    {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
    <div className="hidden md:hidden">
      {/* <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Chapters</a>

        
      </div> */}
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
              <MdAccountCircle className="text-xl text-white"/>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">Devmuhammadk</div>
            <div className="text-sm font-medium leading-none text-gray-400">devmoh@ulesson.com</div>
          </div>
          
        </div>
        <div className="mt-3 px-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  <LoadingBar style={{backgroundColor:"#EA7052"}} />
  {/* <header className="bg-custGrey shadow">
    <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold leading-tight text-gray-900">
        {getRouteName()}
      </h1>
    </div>
  </header> */}
  <main className="w-full bg-transparent h-full main">
    <div className="max-w-7xl mx-auto pb-6 sm:px-6 lg:px-12 md:pt-12 sm:pt-4">
      {screens}
    </div>
  </main>
</div>);

}

export default Layout