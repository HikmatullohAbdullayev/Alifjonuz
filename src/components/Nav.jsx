import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="">
        <ul className='flex justify-around mx-auto  gap-[20px]  bg-secondary max-w-[360px] py-[12px] px-[10px] rounded-[20px] '>
            <li >
               <NavLink to="/" className=' py-[6px] px-[10px] rounded-[20px] hover:bg-white'>Sarf-Nahv</NavLink> 
            </li>
            <li >
               <NavLink to="/boshqa-kurslar" className=' py-[6px] px-[10px] rounded-[20px] hover:bg-white'>Boshqa kurslar</NavLink> 
            </li>
            <li >
               <NavLink to="/testlar" className=' py-[6px] px-[10px] rounded-[20px] hover:bg-white'>Testlar</NavLink> 
            </li>
        </ul>
    </nav>
    );
}

export default Nav;