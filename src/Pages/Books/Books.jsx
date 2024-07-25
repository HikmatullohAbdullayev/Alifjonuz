import React, { useState } from 'react';
import books from "../../data/books.json"
import bookImg from '../../assets/book1.jpg'

function Books() {

    const [booksData, setBooksData] = useState(books.books)

    return (
        <section className='container h-screen max-h-full'>
            <h1 className='text-center font-medium text-[24px] text-primary py-[20px]'>Kitoblar </h1>

            <div className="flex flex-wrap  gap-[20px]">
                {
                    booksData.map((book)=>(
                        <div key={book.id} className="bg-white w-[240px] mx-auto px-[12px] py-[8px] grid gap-[8px] rounded-[14px]">
                            <div className="w-[200px] h-[180px] text-center mx-auto">
                                <img className='w-full h-full  rounded-[14px]    '  src={bookImg} alt={book.name} />
                            </div>
                            <h3 className='text-[20px] font-medium text-primary '><span  className='font-semibold'>Kitob nomi:</span> {book.name}</h3>
                            <p className='text-[20px] font-medium text-primary '><span  className='font-semibold'>Kitob fani:</span> {book.type}</p>
                            <p className='text-[20px] font-medium text-primary '><span  className='font-semibold'>Manba:</span> {book.manba}</p>
                            <a target='blank' href={book.url} className='block py-[12px] w-[200px] rounded-[12px] mx-auto text-center bg-secondary hover:bg-secondary/65 hover:text-primary'> Kitobni ko'rish</a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Books;

