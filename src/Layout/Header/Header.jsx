import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import Nav from '../../components/Nav'

function Header() {
  return (
    <header className="py-[10px] bg-white flex justify-around  ">
      <div className="w-[50px] rounded-[50%]">
        <Link to="/">
          <img src={logo} alt="logo" className="rounded-[50%]" />
        </Link>
      </div>

      <Nav />

      <div className="">
        {/* <Link to="/auth"> <p> Tizimga kirish</p></Link> */}
      </div>
    </header>
  )
}

export default Header
