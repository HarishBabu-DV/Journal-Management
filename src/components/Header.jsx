import React, { useState } from 'react'
import { Link } from 'react-router'
import { logo,FaRegCircleUser, FaChevronDown,HiOutlineMenu ,IoClose,navItems } from '../assets/assets'

const Header = () => {
  // About navitem toggle 
  const [isAboutOpen,setIsAboutOpen]=useState(false)
  
  return (
    <header className='bg-white fixed top-0 left-1/2 -translate-x-1/2 w-full px-[10%] max-md:px-[5%]'>
        {/* Checkbox to toggle menu  */}
        <input type="checkbox" name="open-menu" id="toggle-menu" />

        {/* Logo and user profile Container  */}
        <section className='flex items-center justify-between w-full py-2' >
            <Link className='flex' to={"/"} >
                <div className='w-[50px] h-[50px] max-sm:w-[44px] max-sm:h-[44px]'>
                    <img src={logo} alt="" className='w-full h-full'/>
                </div>
            </Link>
            <div className='flex items-center gap-3'>
              <Link className='bg-[#1b9ce3] text-white px-4 py-1 rounded-md' to={"/"}>
                  Publish
                {/* <FaRegCircleUser className='text-[1.8rem] text-[#494949] max-sm:text-[1.6rem]'/> */}
              </Link>
              {/* Menu icon  */}
              <label htmlFor="toggle-menu" className='hover:cursor-pointer hidden max-md:block '>
                <HiOutlineMenu className='text-[1.8rem] text-[#494949]'/>
              </label>
            </div>
        </section>

        {/*Vertical Navigation bar  */}
        <nav className='bg-[#2e2e2e] fixed top-0 h-screen z-10 w-[40%] py-8 vertical-navbar max-sm:w-full'>

          <label htmlFor="toggle-menu" className='flex justify-end pr-8 hover:cursor-pointer'>
            <IoClose className='text-[1.8rem] text-white max-sm:text-[1.6rem] ' />
          </label>

          <div className='flex flex-col'>
            {/* Home  */}
            <Link to={'/'} className='text-white py-4 px-8 hover:text-[#1b9ce3] hover:bg-[#7c7c7c4e] transition-colors'> {navItems.firstSet} </Link>

            {/* About  */}
            <div className='hover:cursor-pointer  about-navitem-container ' onClick={()=>setIsAboutOpen(!isAboutOpen)}>
              <div className='flex items-center gap-2 py-4 px-8 justify-between hover:bg-[#7c7c7c4e] about-navitem'>
                <span className='text-white '>About</span>
                <span className='text-white '><FaChevronDown /></span>
              </div>
              {/* Hidden navitems container  */}
              <div style={isAboutOpen?{display:"block"}:{display:"none"}}  className='  flex flex-col z-10'>
                {
                  navItems.secondSet.map((navItem)=>(
                    <div className='pl-12 hover:bg-[#7c7c7c4e] flex hidden-navitems-navitem'>
                      <Link to={'/'} className='text-white capitalize py-3  transition-colors ' key={navItem.id}>{navItem.navItem}</Link>
                    </div>  
                  ))
                }
              </div>
            </div>

            {/*Editorial Board,..,faqs*/}
            {
              navItems.thirdSet.map((navItem)=>(
                <Link to={'/'} className='text-white capitalize py-4 px-8 hover:text-[#1b9ce3] transition-colors hover:bg-[#7c7c7c4e]' key={navItem.id}>{navItem.navItem}</Link>
              ))
            }
          </div>
        </nav>


        {/*Horizontal Navigation bar  */}
        <nav className='flex flex-wrap items-center gap-10 bg-[#2e2e2e] relative pl-6 max-md:hidden'>
          
          {/* Home  */}
          <Link to={'/'} className='text-white py-[.3rem]  hover:text-[#1b9ce3] transition-colors'> {navItems.firstSet} </Link>
          
          {/* About  */}
          <div className='relative hover:cursor-pointer about-navitem-container' onClick={()=>setIsAboutOpen(!isAboutOpen)}>
            <div className='flex items-center gap-2 about-navitem'>
              <span className='text-white '>About</span>
              <span className='text-white '><FaChevronDown /></span>
            </div>
            {/* Hidden navitems container  */}
            <div style={isAboutOpen?{display:"block"}:{display:"none"}}  className='absolute top-[130%] bg-white left-0 w-[300px] flex flex-col hidden-navitems'>
              {
                navItems.secondSet.map((navItem)=>(
                  <div className='px-4  hover:bg-[#cccccc94] flex hidden-navitems-navitem'>
                    <Link to={'/'} className='capitalize py-[.3rem] px-[1.5rem] transition-colors ' key={navItem.id}>{navItem.navItem}</Link>
                  </div>  
                ))
              }
            </div>
          </div>
          
          {/*Editorial Board,..,faqs*/}
          {
            navItems.thirdSet.map((navItem)=>(
              <Link to={'/'} className='text-white  capitalize py-[.3rem] hover:text-[#1b9ce3] transition-colors' key={navItem.id}>{navItem.navItem}</Link>
            ))
          }
        </nav>

    </header>
  )
}

export default Header