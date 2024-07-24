

// import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

function Header() {
    return (
        <header className="py-[10px] bg-white flex justify-around  ">
            <div className="">
              {/* <Link to="/">
              <img src="" alt="" />logo
              </Link> */}
            </div>
           
          <Nav/>

          <div className="">
          {/* <Link to="/auth"> <p> Tizimga kirish</p></Link> */}
          </div>
        </header>
    );
}

export default Header;