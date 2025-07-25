import React from 'react';
import {links} from '../data/Data.js';
import image1 from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Button from './Button.jsx';

function Nav() {
  return (
    <div className='w-full bg-white'>

       <div className='flex items-center justify-between w-4/5 mx-auto py-4'>
          <div>
           <img src={image1} alt='logo' width={100} height={100}/>
        </div>

        <div className='flex items-center '>
               <ul className='flex gap-10'>
                    {links.map((item)=>(
                       <li key={item.name} className='hover:text-[#192a56]'>
                            <NavLink to={item.link} className= "text-lg font-semibold">
                                   {item.name}
                            </NavLink>
                       </li>
                    ))}
               </ul>
        </div>

        <div className='flex items-center gap-3'>
            <Button 
               
               text = "Login"
               color= "#0c2461"
               className = "hover:bg-[#192a56] hover:text-white"

           />

            <Button 
               
               text = "Sign Up"
               bg = "#0c2461"
               color = "white"
            />
            
        </div>
       </div>

        
      
    </div>
  );
}

export default Nav;
