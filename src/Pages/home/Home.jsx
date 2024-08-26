import React from 'react'
import Img from '../../assets/onlineWeb.png'
import SearchInput from '../../components/SearchInput'
import SelectType from '../../components/SelectType'
import CoursesSection from '../../components/CoursesSection'
import useZustandStore from '../../store/useZustsandStore.js'

function Home() {
  const { filteredData } = useZustandStore()

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
        <div className="flex justify-evenly items-center gap-[20px] py-[16px] table845:flex-col mobil640:gap-[10px]">
          <h3 className="text-[20px] px-[8px]">Barcha kurslar</h3>
          <SearchInput title={'kursni'} />
          <div className="max-w-[250px] w-full">
            <SelectType />
          </div>
        </div>

        <CoursesSection data={filteredData} Img={Img} />
      </div>
    </div>
  )
}

export default Home
