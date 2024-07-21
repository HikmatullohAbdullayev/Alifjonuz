import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Home from "./Pages/home/Home";
import Kurslar from "./Pages/Kurslar/Kurslar";
// import AlBino from "./Pages/alBino/AlBino";
// import Ajurrumiyyah from "./Pages/ajurrumiyyah/Ajurrumiyyah";
// import AjurrumiyyaSharhi from "./Pages/ajurrumiyyaSharhi/AjurrumiyyaSharhi";
// import AtTuhfatusSaniyya from "./Pages/atTuhfatusSaniyya/AtTuhfatusSaniyya";
// import OsonArabTili from "./Pages/osonArabTili/OsonArabTili";
import Testlar from "./Pages/testlar/Testlar";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* <Route path="/al-bino" element={<AlBino />} />
          <Route path="/ajurrumiyyah" element={<Ajurrumiyyah />} />
          <Route path="/ajurrumiyyah-sharhi" element={<AjurrumiyyaSharhi />} />
          <Route path="/at-tuhfatus-saniyya" element={<AtTuhfatusSaniyya />} /> */}

          <Route path="/kurslar" element={<Kurslar />}/>
            {/* <Route path="/boshqa-kurslar/oson-arab-tili" element={<OsonArabTili />} /> */}
          <Route path="/testlar" element={<Testlar />}></Route>

          <Route path="*" element={<h1>sahifa yo`q</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;











































// import  VideoPlayer  from './components/VideoPlayer';
// import osonArabTiliData from "./data/osonArabTili";

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [selectedLesson, setSelectedLesson] = useState(osonArabTiliData[0]);

//   const progress = Math.ceil(
//     ((osonArabTiliData.indexOf(selectedLesson) + 1) /
//       osonArabTiliData.length) *
//       100
//   )
//   return (
//     <div className="app">
//       <div className="video-section">
//         <h1>{selectedLesson.title}</h1>
//         <VideoPlayer url={selectedLesson.url} />
//       </div>
//       <div className="lesson-section">
//         <h2>Kurs tarkibi</h2>
//         <div className="progress">
//           Progress: {progress} %
//         </div>
//         <div className="lessons-list">
//           {osonArabTiliData.map((lesson) => (
//             <button
//               key={lesson.id}
//               className={`lesson-button ${
//                 selectedLesson.id === lesson.id ? "active" : ""
//               }`}
//               onClick={() => setSelectedLesson(lesson)}
//             >
//               {lesson.id}. {lesson.title}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
