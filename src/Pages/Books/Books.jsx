import React, { useState } from 'react'
import books from '../../data/books.json'
import bookImg from '../../assets/book1.jpg'
import SelectType from '../../components/SelectType'
import SearchInput from '../../components/SearchInput'
import BooksSection from '../../components/BooksSection'

function Books() {
  const [booksData, setBooksData] = useState(books.books)
  const [searchTermBook, setSearchTermBook] = useState('')
  const [selectTermBook, setSelectTermBook] = useState('')

  const handleInputChange = (event) => {
    setSearchTermBook(event.target.value)
    const filteredData = books.books.filter((course) =>
      course.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setBooksData(filteredData)
  }

  const handleSelectChange = (event) => {
    setSelectTermBook(event.target.value)
    const filteredData = books.books.filter((selectedBook) =>
      selectedBook.type.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setBooksData(filteredData)
  }

  return (
    <section className="container h-screen max-h-full">
      <div className="flex justify-evenly items-center gap-[20px] py-[16px] table845:flex-col">
        <h3 className="text-center font-medium text-[24px] text-primary py-[20px]">
          Kitoblar
        </h3>
        <SearchInput
          handleInputChange={handleInputChange}
          searchTerm={searchTermBook}
          title={'kitobni'}
        />
        <div className="max-w-[250px] w-full">
          <SelectType handleSelectChange={handleSelectChange} />
        </div>
      </div>
      <BooksSection booksData={booksData} bookImg={bookImg} />
    </section>
  )
}

export default Books
