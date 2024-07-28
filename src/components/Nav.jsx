import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props) {
  return (
    <nav className="">
      <ul className="flex justify-around mx-auto  gap-[20px]  bg-secondary max-w-[360px] py-[12px] px-[10px] rounded-[20px] ">
        <li>
          <NavLink
            to="/"
            className=" py-[6px] px-[10px] rounded-[20px] hover:bg-white"
          >
            Kurslar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kitoblar"
            className=" py-[6px] px-[10px] rounded-[20px] hover:bg-white"
          >
            Kitoblar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className=" py-[6px] px-[10px] rounded-[20px] hover:bg-white"
          >
            Savollar
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
