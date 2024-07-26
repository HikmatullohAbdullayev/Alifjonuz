import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VideoPlayer from '../../components/VideoPlayer'
import dataCourses from '../../data/data.json'
import { Button } from '@/components/ui/button'

function Kurslar() {
  // URL parametrlarini olish
  const { title } = useParams()

  // Mahsulotlar holati va yuklanish holatini boshqarish
  const [data, setData] = useState(dataCourses.courses)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)

  useEffect(() => {
    // Dastlabki darsni tanlash
    const initialLesson = data.find((item) => item.categoryTitle === title)
      ?.lessons[0]
    setSelectedLesson(initialLesson || null)
  }, [title, data])

  if (loading) return <p>Yuklanmoqda...</p>
  if (error) return <p>Xatolik: {error.message}</p>

  // Ma'lumotni filtrlaymiz
  const filteredData = data.find((item) => item.categoryTitle === title)

  return (
    <div className="container my-[20px] table1005:w-full">
      <h1 className="text-[24px] text-primary font-semibold py-[12px] my-[12px]">
        Kurs Sarlavhasi: {title}
      </h1>

      <div className="flex justify-between items-start gap-[16px] mx-auto table1005:flex-col ">
        {selectedLesson && (
          <VideoPlayer
            url={selectedLesson.url}
            title={selectedLesson.title}
            number={selectedLesson.id}
          />
        )}

        {filteredData ? (
          <div className="w-[450px]  h-[500px] overflow-y-scroll  table1005:w-full table1005:mt-[100px]">
            {filteredData.lessons.length > 0 ? (
              filteredData.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="bg-white text-primary w-full rounded-[12px] py-[18px] px-[12px]  border "
                >
                  <Button onClick={() => setSelectedLesson(lesson)}>
                    <p className="text-[18px] text-wrap text-start leading-[20px] pb-[20px] ">
                      {lesson.title}
                    </p>
                  </Button>
                </div>
              ))
            ) : (
              <p>Qo'shimcha ma'lumot topilmadi.</p>
            )}
          </div>
        ) : (
          <p>Ma'lumot topilmadi.</p>
        )}
      </div>
    </div>
  )
}

export default Kurslar
