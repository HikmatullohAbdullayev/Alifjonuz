import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

function MainLayout() {
    return (
        <div className="wrapper">
          <div className=" bg-blue-50">
          <p className="bg-primary text-white text-center py-2">
                Platforma test rejimida ishlamoqda
            </p>
            <div className="">
            <Header/>
            <main className="bg-bg">
                <Outlet/>
            </main>
            </div>
          </div>
            <Footer/>

            
            
        </div>
    );
}

export default MainLayout;