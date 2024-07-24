import { useState } from 'react';
import { Link } from 'react-router-dom';
import dataCourses from "../../data/data.json";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

function Home() {
    
  const [data, setData] = useState(dataCourses.courses); // dataCoursesni to'g'ridan-to'g'ri ishlatish


  return (
    <div className="container">
      <div className="text-center mx-auto  max-w-[400px]">
        <h1 className="font-semibold text-[36px] text-primary">Zamaxshariy Edu</h1>
        <p className="font-semibold text-[28px] text-text">Online ta`lim platformasi</p>
      </div>

      <div className=" ">
        <div>
        {/*  <div className="flex justify-evenly items-center py-[16px]">
             <h3 className='text-[20px] px-[8px]  '>Barcha kurslar</h3>
            <Input type="text" placeholder="Qaysi kursni qidiryabsiz" className="max-w-[250px] bg-white rounded-lg " />
            <Select>
      <SelectTrigger className="max-w-[250px] bg-white rounded-lg  hover:bg-primary" >
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
          </div>*/}

       <ul className="grid   gap-[16px] mt-5  grid-cols-[repeat(auto-fill,minmax(400px,1fr))]  mobile530:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]   ">
       {data.length > 0 ? (
            data.map((item) => (
              <Link className="border w-[400px] rounded-[12px] mx-auto bg-white px-[10px] py-[8px] mobile530:w-[330px]  " to={`/courses/${item.categoryTitle}`} key={item.categoryId}>
                <li >
                  <h2 className="text-[24px] text-primary font-bold mobile530:text-[20px] ">{item.categoryTitle}</h2>
                  <p className='text-[18px] text-gray-700  mobile530:text-[14px]'><span className='font-semibold text-[20px] text-black mobile530:text-[16px]'>Fan:</span> {item.categoryType}</p>
                  <p className='text-[18px] text-gray-700  mobile530:text-[14px]'><span className='font-semibold text-[20px] text-black mobile530:text-[16px]'>Manba:</span> {item.source}</p>
                  <p className='text-[18px] text-gray-700  mobile530:text-[14px]'><span className='font-semibold text-[20px] text-black mobile530:text-[16px]'>Darslar soni:</span> {item.lessonsCount}</p>
                  <p className='text-[18px] text-gray-700  mobile530:text-[14px]'><span className='font-semibold text-[20px] text-black mobile530:text-[16px]'>Tugallanganmi:</span> {item.completed ? "Ha" : "Yo'q"}</p>
                  
                </li>
              </Link>
            ))
          ) : (
            <p>Ma`lumot topilmadi.</p>
          )}
       </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
