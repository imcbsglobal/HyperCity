import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"
import { CgMenuGridO } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { auth } from "./Firebase"
import { onAuthStateChanged } from 'firebase/auth';


const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [user, setUser] = useState(null);
  const [active, setActive] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
}, []);


  const handleMenu = () => {
    setMenu(!menu)
  }

  async function handleLogout() {
    try {
        await auth.signOut();
        window.location.href = "/";
        console.log('Admin Logout successfully');
    } catch (error) {
        console.error("Error Logging Out:", error.message);
    }
  }

  useEffect(() => {
    const scrollActive = () => {
        setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
}, []);

const location = useLocation()

const getLinkClassName = (path) => {
  // Check if the current location path matches the route, allowing nested route support.
  return location.pathname === path || location.pathname.startsWith(path)
    ? 'NavbarHover active-link'
    : 'NavbarHover';
};


  return (
    <div>
      {menu ? (
        <div>
          <MobileNavbar handleMenu={handleMenu} />
        </div>
      ) : (
        <header className=' w-full px-6 py-2 fixed z-[999] navbarBg'>
          <nav className=' flex justify-between items-center lg:max-w-[1200px] lg:mx-auto'>
            <Link to="/">
              <div className=' w-auto h-[80px]'>
                <img src={logo} className=' w-full h-full object-contain drop-shadow-sm' alt="" />
              </div>
            </Link>
            <div className='hidden md:flex md:justify-center md:items-center'>
              <ul className=' flex justify-center items-center gap-5 titleText font-bold text-[#494343]'>
                <li><Link className={getLinkClassName("/")} to='/'>Home</Link></li>
                <li><Link className={getLinkClassName("/about")} to='/about'>About</Link></li>
                <li><Link className={getLinkClassName("/branch")} to='/branch'>Branch</Link></li>
                <li><Link className={getLinkClassName("/products")} to='/products'>Products</Link></li>
                <li><Link className={getLinkClassName("/gallery")}  to='/gallery'>Gallery</Link></li>
                <li><Link className={getLinkClassName("/contact")} to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className=' md:hidden flex items-center gap-5'>
              {user ? (
                <FaUserAltSlash className='text-[25px] text-[#FF6C00] drop-shadow-md cursor-pointer' onClick={handleLogout}/>
              ):
              (
                
                <Link to='/login'><FaUserCircle className='text-[25px] text-[#FF6C00] drop-shadow-md cursor-pointer'/></Link>
              )}
              
              
              <CgMenuGridO onClick={handleMenu} className='text-3xl text-[#059328] font-bold cursor-pointer drop-shadow-lg' />
            </div>
            
            <div className='justify-center items-center gap-10 hidden md:flex'>
              {user ? (
                <div className='titleText font-bold text-[#FF6C00] cursor-pointer' onClick={handleLogout}>Logout</div>
              ):(
                <Link to='/login'><div className='titleText font-bold text-[#FF6C00]'>Login</div></Link>
              )}
              
              
              <div className=' hidden md:flex flex-col gap-2 text-[#494343]'>
                <a href="tel:+919539336622">
                  <div className=' flex items-center gap-2'>
                    <div><IoCallSharp/></div>
                    <div className=' font-bold'>+91 9539336622</div>
                  </div>  
                </a>
                <a href="mailto:info@hypercityhypermarket.com">
                  <div className=' flex items-center gap-2'>
                    <div><HiOutlineMail/></div>
                    <div className=' font-bold'>info@hypercityhypermarket.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </header>
      )}
    </div>
  )
}

export default Navbar
