import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './../assets/ask.svg';
import Button from './Button';

const Navbar = () => {
  const navRef = useRef()
  const showMenu = () => {
    navRef.current.classList.toggle('translate-x-[100%]');
  }
  // const pathname = window.location.pathname;
  // console.log(pathname);
  return (
    <nav className={`w-full mx-auto lg:px-auto sm:px-20 transition duration-500 flex justify-center h-fit`}>
    <div className={`flex w-full fixed md:static max-w-[1200px] mx-auto justify-between transition duration-500 backdrop-blur h-16 px-4 md:px-0 z-20`}>
        
        {/* Brand Logo */}
        <div className='flex my-auto'>
            <Link to='/' className={``}>
                <img src={logo} alt='ask the chip' />
            </Link>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex font-body my-auto items-center justify-between w-full max-w-[500px]'>
            <NavLink to="/" end className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>About us</NavLink>
            <NavLink to='/discover' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Discover</NavLink>
            <Button path='register' title='Register' />
        </div>

        {/* Mobile nav & toggler */}
        <div className='flex md:hidden'>
          <button onClick={showMenu} className="flex pt-[1rem] absolute right-2 md:hidden p-3 transition active:scale-90">
              <FaBars size={30} />
          </button>
          <div ref={navRef} className={`flex translate-x-[100%] z-10 md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0 backdrop-blur`}>
              <div className='flex justify-center mb-4 mt-[50%]' onClick={showMenu}>
                <NavLink to="/" className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')} end>Home</NavLink>
              </div>
              <div className='flex justify-center my-4' onClick={showMenu}>
                <NavLink to='/about' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>About</NavLink>
              </div>
              <div className='flex justify-center my-4' onClick={showMenu}>
                <NavLink to='/discover' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Discover</NavLink>
              </div>
              <div className='flex justify-center my-4' onClick={showMenu}>
                <NavLink to='/register' className={({isActive}) =>(isActive ? 'px-4 underline decoration-2 underline-offset-4' : 'px-4 hover:underline decoration-2 underline-offset-4')}>Register</NavLink>
              </div>
              <button onClick={showMenu} className="flex absolute right-2 md:hidden p-3 ease-in transition duration-500 active:scale-90">
                <FaTimes size={40}/>
              </button>
          </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;