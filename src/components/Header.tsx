import Link from 'next/link'
import { IoAirplane  } from "react-icons/io5";

const Header=()=>{
  return (
    
         <div className="header">
      <h1 className="logo">Travel</h1>
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/About">ABOUT</Link>
        <Link href="/Contact">CONTACT</Link>
        <Link href="/Packages">PACKAGES</Link>
        <IoAirplane/>
      </nav>
    </div>
  )
}

export default Header
