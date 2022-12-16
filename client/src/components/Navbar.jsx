import { HiMenu } from 'react-icons/hi';
import {AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';

import logo from '../../images/logo.png';

const NavBarItem = ({title , classProp})=>{
    return(
        <li className="mx-6 cursor-pointer ${classProp}">
            {title}
        </li>
    );
}

const Navbar =()=>
{

   const [toggleMenu, setToggleMenu] = useState(false)
    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
           <div className="md:flex-[0.5] flex-initial justify-center items-center">
           <img src={logo} alt="logo" className="w-32 cursor-pointer" />
           </div>
           <div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
             {["Wallet","Transactions","Contact","Assets"].map((item)=>(<NavBarItem key={item} title={item}/>))}
             <li className="bg-[beige] text-black px-8 py-3 mx-6 rounded-full hover:bg-[silver] cursor-pointer">
                Login
             </li>
            </ul>
              <div className="flex relative">
                {
                    toggleMenu
                    ?<AiOutlineCloseSquare fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                    :<HiMenu fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
          <ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            
            <li className="text-xl w-full my-2"><AiOutlineCloseSquare onClick={() => setToggleMenu(false)} /></li>
            {["Wallet","Transactions","Contact","Assets"].map(
              (item) => <NavBarItem key={item} title={item} classprop="my-2 text-lg" />,
            )}
          </ul>
        )}

              </div>

           </div>
        </nav>
    );
}

export default Navbar;