import { create } from 'zustand'
import dataCourses from '../data/data.json'
import bookData from '../data/books.json'

const useZustandStore = create((set, get) => ({
  searchTerm: '',
  selectTerm: '', // select uchun state
  bookList: bookData,
  filteredBookData: bookData.books, // Dastlabki holat kitoblar uchun

  dataList: dataCourses,
  filteredData: dataCourses.courses, // Dastlabki holat video kurslar uchun

  handleSelectChange: (event) => {
    const selectTerm = event.target.value
    set({ selectTerm })

    const filteredData = get().dataList.courses.filter((course) =>
      course.categoryType.toLowerCase().includes(selectTerm.toLowerCase())
    )

    set({ filteredData })
  },

  handleInputChange: (event) => {
    const searchTerm = event.target.value
    set({ searchTerm })

    // Filtrni yangilash video kurslar uchun
    const filtered = get().dataList.courses.filter((course) =>
      course.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
    )
    set({ filteredData: filtered })

    // Filtrni yangilash kitoblar uchun
    const selectTermBook = get().selectTerm
    const filteredBook = get().bookList.books.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        book.type.toLowerCase().includes(selectTermBook.toLowerCase())
    )
    set({ filteredBookData: filteredBook })
  },
}))

export default useZustandStore
