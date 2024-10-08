import { data } from 'autoprefixer'
import React from 'react'

function BooksSection({ bookImg, currentItems }) {
  return (
    <div className="flex flex-wrap  gap-[20px] ">
      {currentItems.length > 0 ? (
        currentItems.map((book) => (
          <div
            key={book.id}
            className="bg-white w-[240px] mx-auto px-[12px] py-[18px] grid gap-[8px] rounded-[14px]"
          >
            <div className="w-[200px] h-[180px] text-center mx-auto">
              <img
                className="w-full h-full  rounded-[14px]    "
                src={bookImg}
                alt={book.name}
              />
            </div>
            <h3 className="text-[20px] font-medium text-primary ">
              <span className="font-semibold">Kitob nomi:</span> {book.name}
            </h3>
            <p className="text-[20px] font-medium text-primary ">
              <span className="font-semibold">Kitob fani:</span> {book.type}
            </p>
            <p className="text-[20px] font-medium text-primary ">
              <span className="font-semibold">Manba:</span> {book.manba}
            </p>
            <a
              target="blank"
              href={book.url}
              className="block py-[12px] w-[200px] rounded-[12px] mx-auto text-center bg-secondary hover:bg-secondary/65 hover:text-primary"
            >
              {' '}
              Yuklab olish
            </a>
          </div>
        ))
      ) : (
        <div className="text-center border bg-white rounded-2xl py-[12px] w-full my-[30px]">
          <p className="mx-auto text-[20px] ">Ma`lumot topilmadi.</p>
        </div>
      )}
    </div>
  )
}

export default BooksSection
