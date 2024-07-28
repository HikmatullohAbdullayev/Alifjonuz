import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../footer/Footer'
import Marquee from 'react-fast-marquee'

function MainLayout() {
  return (
    <div className="wrapper">
      <div className=" bg-bg">
        <Marquee
          pauseOnHover={true}
          className="bg-primary text-white text-center py-2"
        >
          <p className="">Platforma test rejimida ishlamoqda</p>
        </Marquee>
        <div className="">
          <Header />
          <main className="  max-h-full h-full">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
