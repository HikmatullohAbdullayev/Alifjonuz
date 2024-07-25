import { useState } from 'react'
import { Link } from 'react-router-dom'
import dataCourses from '../../data/data.json'
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Img from '../../assets/onlineWeb.png'

function Home() {
  const [data, setData] = useState(dataCourses.courses) // dataCoursesni to'g'ridan-to'g'ri ishlatish

  return (
    <div className="container">
      <div className="text-center mx-auto  max-w-[400px]">
        <h1 className="font-semibold text-[36px] text-primary">
          Zamaxshariy Edu
        </h1>
        <p className="font-semibold text-[28px] text-text">
          Online ta`lim platformasi
        </p>
      </div>

      <div className=" ">
        <div>
           <div className="flex justify-evenly items-center py-[16px]">
             <h3 className='text-[20px] px-[8px]  '>Barcha kurslar</h3>
            <Input type="text" placeholder="Qaysi kursni qidiryabsiz" className="max-w-[250px] bg-white rounded-lg " />
            <Select>
      <SelectTrigger className="max-w-[250px] bg-white rounded-lg  hover:bg-gray-300" >
        <SelectValue placeholder="Darslikni tanlang" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid gap-[4px] ">
          <SelectItem className="cursor-pointer border bg-white" value="sarf">Sarf</SelectItem>
          <SelectItem className="cursor-pointer border bg-white" value="nahv">Nahv</SelectItem>
          <SelectItem   className="cursor-pointer border bg-white" value="boshqa">Boshqa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> 
          </div>

          <div className="grid   gap-[12px] mt-5  grid-cols-[repeat(auto-fill,minmax(384px,1fr))] mobile530:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {data.length > 0 ? (
              data.map((item) => (
                <ul
                  className="border  rounded-[12px] mx-auto bg-white px-[10px] py-[8px] "
                  key={item.categoryId}
                >
                  <li className='max-w-[380px] '>
                    <div className="rounded-[50px] p-[10px] ">
                      <img
                        className=" rounded-[20px]  w-full max-h-[250px]   object-cover"
                        src={Img}
                        alt="img"/>
                    </div>
                    <h2 className="text-[24px] mt-[16px] text-primary font-bold mobile530:text-[20px] ">
                      {item.categoryTitle}
                    </h2>
                    <p className="text-[18px] text-gray-700  mobile530:text-[14px]">
                      <span className="font-semibold text-[20px] text-teal mobile530:text-[16px]">
                        Fan:
                      </span>{' '}
                      {item.categoryType}
                    </p>
                    <p className="text-[18px] text-gray-700 text-wrap mobile530:text-[14px]">
                      <span className="font-semibold  text-[20px] text-teal mobile530:text-[16px]">
                        Manba:
                      </span>{' '}
                      {item.source}
                    </p>
                    <p className="text-[18px] text-gray-700  mobile530:text-[14px]">
                      <span className="font-semibold text-[20px] text-teal mobile530:text-[16px]">
                        Darslar soni:
                      </span>{' '}
                      {item.lessons.length}
                    </p>
                    <p className="text-[18px] text-gray-700  mobile530:text-[14px]">
                      <span className="font-semibold text-[20px] text-teal mobile530:text-[16px]">
                        Tugallanganmi:
                      </span>{' '}
                      {item.completed ? 'Ha' : "Yo'q"}
                    </p>
                    <Link
                      className="block text-center bg-text py-[12px] text-white mt-[10px] rounded-[12px] hover:bg-primary"
                      to={`/courses/${item.categoryTitle}`}
                    >
                      {' '}
                      Kursga o'tish
                    </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p>Ma`lumot topilmadi.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
