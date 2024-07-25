import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout'
import Home from './Pages/home/Home'
import Kurslar from './Pages/Kurslar/Kurslar'
// import AlBino from "./Pages/alBino/AlBino";
// import Ajurrumiyyah from "./Pages/ajurrumiyyah/Ajurrumiyyah";
// import AjurrumiyyaSharhi from "./Pages/ajurrumiyyaSharhi/AjurrumiyyaSharhi";
// import AtTuhfatusSaniyya from "./Pages/atTuhfatusSaniyya/AtTuhfatusSaniyya";
// import OsonArabTili from "./Pages/osonArabTili/OsonArabTili";
import Testlar from './Pages/testlar/Testlar'
import './App.css'
import Auth from './Auth/Auth'
import Books from './Pages/Books/Books'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses/:title" element={<Kurslar />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/Kurslar" element={<Kurslar />} />
          <Route path="/kitoblar" element={<Books />} />
          
          <Route path="/testlar" element={<Testlar />}></Route>

          <Route path="*" element={<h1>sahifa yo`q</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
