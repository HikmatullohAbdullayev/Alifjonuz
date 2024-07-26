import React, { useState } from 'react'
import dataCourses from '../../data/data.json'
import Img from '../../assets/onlineWeb.png'
import SearchInput from '../../components/SearchInput'
import SelectType from '../../components/SelectType'
import CoursesSection from '../../components/CoursesSection'

function Home() {
  const [data, setData] = useState(dataCourses.courses)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectTerm, seSelectTerm] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
    const filteredData = dataCourses.courses.filter((course) =>
      course.categoryTitle
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    )
    setData(filteredData)
  }

  const handleSelectChange = (event) => {
    seSelectTerm(event.target.value)
    const filteredData = dataCourses.courses.filter((course) =>
      course.categoryType
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    )
    setData(filteredData)
  }
  return (
    <div className="container mt-[20px] mb-[50px]">
      <div className="text-center mx-auto max-w-[400px]">
        <h1 className="font-semibold text-[36px] text-primary">
          Zamaxshariy Edu
        </h1>
        <p className="font-semibold text-[28px] text-text">
          Online ta`lim platformasi
        </p>
      </div>

      <div>
        <div className="flex justify-evenly items-center gap-[20px] py-[16px] table845:flex-col">
          <h3 className="text-[20px] px-[8px]">Barcha kurslar</h3>
          <SearchInput
            handleInputChange={handleInputChange}
            searchTerm={searchTerm}
          />
          <div className="max-w-[250px] w-full">
            <SelectType handleSelectChange={handleSelectChange} />
          </div>
        </div>

        <CoursesSection data={data} Img={Img} />
      </div>
    </div>
  )
}

export default Home
