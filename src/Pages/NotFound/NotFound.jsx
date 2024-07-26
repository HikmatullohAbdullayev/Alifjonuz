import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(props) {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Sahifa topilmadi</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-[12px]  hover:bg-blue-700 transition duration-300"
      >
        Bosh sahifaga o'tish
      </Link>
    </section>
  )
}

export default NotFound
