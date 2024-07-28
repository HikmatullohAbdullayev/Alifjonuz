import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout'
import Home from './Pages/home/Home'
import Kurslar from './Pages/Kurslar/Kurslar'
import Testlar from './Pages/testlar/Testlar'
import './App.css'
import Books from './Pages/Books/Books'
import NotFound from './Pages/NotFound/NotFound'
import Faq from './Pages/Faq/Faq'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses/:title" element={<Kurslar />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="/Kurslar" element={<Kurslar />} />
          <Route path="/kitoblar" element={<Books />} />

          <Route path="/testlar" element={<Testlar />}></Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
