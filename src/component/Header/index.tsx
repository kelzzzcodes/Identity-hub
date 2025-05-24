import React from 'react'
import { Link } from 'react-router-dom'
import { navbarData } from '../../common/map'

export const Header = () => {
  return (
    <nav className=" p-4 bg-[#4B0082] flex  items-center justify-between">
      <Link to="/">
        <img src="./asset//logo.png" className="rounded-lg w-16 " alt="logo" />
      </Link>
      <div className="flex gap-6 mr-8 text-white">
        {navbarData.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="flex items-center gap-2 text-xl "
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
