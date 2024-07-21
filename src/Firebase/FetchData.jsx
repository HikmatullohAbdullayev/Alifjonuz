
import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { analytics } from "./firebaseConfig";

const FetchData = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
      const dbRef = ref(getDatabase());

      const snapshot = await get(child(dbRef, "categories"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setCategories(formattedData);
        console.log(categories);

      } else {
        console.log("No data available");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Kategoriyalar</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <h2>{category.categoryTitle}</h2>
            <p>Tur: {category.categoryType}</p>
            <p>Manba: {category.source}</p>
            <p>Darslar soni: {category.lessonsCount}</p>
            <p>Tugallangan: {category.completed ? "Ha" : "Yo'q"}</p>
            {/* <ul>
              {category.lessons.map(lesson => (
                <li key={lesson.id}>
                  <a href={lesson.url} target="_blank" rel="noopener noreferrer">
                    {lesson.title}
                  </a>
                </li>
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
