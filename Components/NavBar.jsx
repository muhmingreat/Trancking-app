import React,{useState,useEffect,useContext} from "react";
import { TrackingContext } from "../Context/Tracking";
import {Nav1,Nav2,Nav3} from  '../Components/index'

const NavBar = () => {

  const[state, setState] = useState(false);

  const{currentUser,connectWallet} = useContext(TrackingContext)

  const navigation = [
    {title:'Home',path:'#' },
    {title:'Services', path:'#'},
    {title: 'Contact', path:'#'},
    {title:'Blog', path:'#'},
  ]
  useEffect(()=>{
    document.onClick = (e) => {
      const target = e.target;
      if(!target.closest('.menu-btn')) setState(false)

    }
  },[])
  return (

  <nav className={`bg-white md:text-sm ${state ?
         "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 " : ""
   }`}>
      <div className="gap-x-14 items-center
            max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <div className="flex items-center justify-between
          my-3 md:block ">
            <a href='#'>
              <img src='https://www.floatui.com/logo.svg' alt=''
                width={120}
                height={120}
          
              />
             </a>
             <div className='md:hidden'>
              <botton className='menu-btn text-green-500
              hover:text-green-800 '
              onClick={()=> setState(!state)}>
                {state ? <Nav1/> :<Nav2/>}
              </botton>
             </div>
          </div>
          <div className={`flex-1  items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"}`}>
            <ul className="  justify-center items-center
            space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, i) => {
                  return (
                      <li key={i} className='text-green-700
                      hover:text-green-900'>
                        <a href={item.path} className="block"
                        >{item.title}</a>
                      </li>
                  )
              })}
            <div className="flex  items-center
            justify-end md:space-y-0 md:mt-0">
              {currentUser ? (
                <button className="flex items-center
                justify-center gap-x-3 my-2 px-4
                text-white font-medium bg-gray-800
                hover:bg-gray-700
                active:bg-gray-900
                rounded-full md:inline-flex">
                  {currentUser.slice(0,20)}...
                </button>
              ): (
                <button className="flex items-center
                justify-center gap-x-1 py-2 px-4
                text-white font-medium bg-blue-800
                hover:bg-gray-700 active:bg-blue-900
                rounded-full md:inline-flex
                " onClick={connectWallet}> Connect Wallet
                  <Nav3/>
                </button>
              )}
            </div>
            </ul>
          </div>
      </div>

  </nav>
  )
};

export default NavBar;
