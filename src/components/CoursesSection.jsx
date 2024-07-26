import { Link } from 'react-router-dom'

function CoursesSection({ data, Img }) {
  return (
    <div className="grid gap-[12px] mt-5 grid-cols-[repeat(auto-fill,minmax(384px,1fr))] mobile530:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {data.length > 0 ? (
        data.map((item) => (
          <ul
            className="border rounded-[12px] mx-auto bg-white px-[10px] py-[8px]"
            key={item.categoryId}
          >
            <li className="max-w-[380px]">
              <div className="rounded-[50px] p-[10px]">
                <img
                  className="rounded-[20px] w-full max-h-[250px] object-cover"
                  src={Img}
                  alt="img"
                />
              </div>
              <h2 className="text-[24px] mt-[16px] text-primary font-semibold mobile530:text-[20px]">
                {item.categoryTitle}
              </h2>
              <p className="text-[18px] text-gray-700 mobile530:text-[14px]">
                <span className="font-medium text-[20px] text-teal mobile530:text-[16px]">
                  Fan:
                </span>{' '}
                {item.categoryType}
              </p>
              <p className="text-[18px] text-gray-700 text-wrap mobile530:text-[14px]">
                <span className="font-semibold text-[20px] text-teal mobile530:text-[16px]">
                  Manba:
                </span>{' '}
                {item.source}
              </p>
              <p className="text-[18px] text-gray-700 mobile530:text-[14px]">
                <span className="font-semibold text-[20px] text-teal mobile530:text-[16px]">
                  Darslar soni:
                </span>{' '}
                {item.lessons.length}
              </p>
              <p className="text-[18px] text-gray-700 mobile530:text-[14px]">
                <span className="font-semibold text-[20px] text-teal mobile530:text-[16px]">
                  Tugallanganmi:
                </span>{' '}
                {item.completed ? 'Ha' : "Yo'q"}
              </p>
              <Link
                className="block text-center bg-text py-[12px] text-white mt-[10px] rounded-[12px] hover:bg-primary"
                to={`/courses/${item.categoryTitle}`}
              >
                Kursga o'tish
              </Link>
            </li>
          </ul>
        ))
      ) : (
        <div className="text-center border bg-white rounded-2xl py-[12px] ">
          <p className="mx-auto ">Ma`lumot topilmadi.</p>
        </div>
      )}
    </div>
  )
}

export default CoursesSection
