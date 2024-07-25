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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses/:title" element={<Kurslar />} />
          <Route path="/auth" element={<Auth />} />

          {/* <Route path="/al-bino" element={<AlBino />} />
          <Route path="/ajurrumiyyah" element={<Ajurrumiyyah />} />
          <Route path="/ajurrumiyyah-sharhi" element={<AjurrumiyyaSharhi />} />
          <Route path="/at-tuhfatus-saniyya" element={<AtTuhfatusSaniyya />} /> */}

          <Route path="/kitoblar" element={<Kurslar />} />
          {/* <Route path="/boshqa-kurslar/oson-arab-tili" element={<OsonArabTili />} /> */}
          <Route path="/testlar" element={<Testlar />}></Route>

          <Route path="*" element={<h1>sahifa yo`q</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
