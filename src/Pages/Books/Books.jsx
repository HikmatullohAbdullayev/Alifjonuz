import React, { useState, useEffect } from 'react'
import books from '../../data/books.json'
import bookImg from '../../assets/book1.jpg'
import SelectType from '../../components/SelectType'
import SearchInput from '../../components/SearchInput'
import BooksSection from '../../components/BooksSection'
import Paginations from '../../components/Paginations'

function Books() {
  const [booksData, setBooksData] = useState(books.books)
  const [searchTermBook, setSearchTermBook] = useState('')
  const [selectTermBook, setSelectTermBook] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const itemsPerPageMobile = 5

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = booksData.slice(indexOfFirstItem, indexOfLastItem)

  useEffect(() => {
    const filteredData = books.books.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTermBook.toLowerCase()) &&
        book.type.toLowerCase().includes(selectTermBook.toLowerCase())
    )
    setBooksData(filteredData)
  }, [searchTermBook, selectTermBook])

  const handleInputChange = (event) => {
    setSearchTermBook(event.target.value)
    setCurrentPage(1)
  }

  const handleSelectChange = (event) => {
    setSelectTermBook(event.target.value)
    setCurrentPage(1)
  }

  return (
    <section className="container max-h-full mb-[40px]">
      <div className="flex justify-evenly items-center gap-[20px] py-[16px] table845:flex-col mobil640:py-[6px] mobil640:gap-[14px]">
        <h3 className="text-center font-medium text-[24px] text-primary py-[20px] mobil640:py-[16px]">
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
      <BooksSection bookImg={bookImg} currentItems={currentItems} />
      <div className="px-[20px] block mobile480:hidden">
        <Paginations
          currentPage={currentPage}
          totalItems={booksData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="px-[20px] hidden mobile480:block">
        <Paginations
          currentPage={currentPage}
          totalItems={booksData.length}
          itemsPerPage={itemsPerPageMobile}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  )
}

export default Books
