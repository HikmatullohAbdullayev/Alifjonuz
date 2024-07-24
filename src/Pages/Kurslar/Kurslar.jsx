import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import dataCourses from "../../data/data.json";

function Kurslar() {
  // URL parametrlarini olish
  const { title } = useParams();

  // Mahsulotlar holati va yuklanish holatini boshqarish
  const [data, setData] = useState(dataCourses.courses);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    // Dastlabki darsni tanlash
    const initialLesson = data
      .find(item => item.categoryTitle === title)
      ?.lessons[0];
    setSelectedLesson(initialLesson || null);
  }, [title, data]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error.message}</p>;

  // Ma'lumotni filtrlaymiz
  const filteredData = data.find(item => item.categoryTitle === title);

  return (
    <div className='container'>
      <h1>Kurs Sarlavhasi: {title}</h1>
      
      {selectedLesson && <VideoPlayer url={selectedLesson.url} />}
      
      {filteredData ? (
        <div>
          {filteredData.lessons.length > 0 ? (
            filteredData.lessons.map(lesson => (
              <div key={lesson.id}>
                <button onClick={() => setSelectedLesson(lesson)}>
                  {lesson.title}
                </button>
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
  );
}

export default Kurslar;
