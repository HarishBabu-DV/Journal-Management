import React, { useState } from 'react'
import { Link } from 'react-router'
import { logo,FaRegCircleUser, FaChevronDown, navItems } from '../assets/assets'

const Header = () => {
  // About navitem toggle 
  const [isAboutOpen,setIsAboutOpen]=useState(false)
  return (
    <header className='w-[80%] mx-auto'>

        {/* Logo and user profile Container  */}
        <section className='flex items-center justify-between w-full py-2' >
            <Link className='flex' to={"/"} >
                <div className='w-[50px] h-[50px] max-sm:w-[44px] max-sm:h-[44px]'>
                    <img src={logo} alt="" className='w-full h-full'/>
                </div>
            </Link>
            <Link className='' to={"/"}>
              <FaRegCircleUser className='text-[1.8rem] text-[#494949] max-sm:text-[1.6rem]'/>
            </Link>
        </section>

        {/* Navigation bar  */}
        <nav className='flex items-center gap-10 bg-[#2e2e2e] relative pl-10'>
          
          {/* Home  */}
          <Link to={'/'} className='text-white py-[.3rem]  hover:text-[#1b9ce3] transition-colors'> {navItems.firstSet} </Link>
          
          {/* About  */}
          <div className='relative hover:cursor-pointer about-navitem-container' onClick={()=>setIsAboutOpen(!isAboutOpen)}>
            <div className='flex items-center gap-2 about-navitem'>
              <span className='text-white '>About</span>
              <span className='text-white '><FaChevronDown /></span>
            </div>
            {/* Hidden navitems container  */}
            <div style={isAboutOpen?{display:"block"}:{display:"none"}}  className='absolute top-[130%] left-0 w-[300px] flex flex-col hidden-navitems'>
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