import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import { logo,FaRegCircleUser, FaChevronDown,HiOutlineMenu ,IoClose,navItems } from '../assets/assets'

const Header = () => {
  // Horizontal about menu status 
  const [isHorizontalAboutOpen,setIsHorizontalAboutOpen]=useState(false)

  // Vertical about menu status 
  const [isVerticalAboutOpen,setIsVerticalAboutOpen]=useState(false)

  //Horizontal About menu
  const horizontalAboutMenuRef=useRef()

  //Checkbox to toggle vertical Navbar
  const toggleVerticalMenu=useRef()

  //Function to handle when vertical about navitems are clicked
  const handleVerticalNavClose=()=>{
   toggleVerticalMenu.current.checked=false
  }
 
  const currentLocation=useLocation()

  
  useEffect(()=>{
    const closeHorizontalAboutMenu=event=>{
      console.log(event);
      if(!horizontalAboutMenuRef.current.contains(event.target)){
        setIsHorizontalAboutOpen(false) 
      }
    }
    document.body.addEventListener('click',closeHorizontalAboutMenu);
    return ()=> document.body.removeEventListener('click',closeHorizontalAboutMenu)
  },[])
  
  return (
    <header className='flex justify-center'>
      <div className='fixed  max-w-[1920px] w-full px-[10%] bg-white '>
        {/* Checkbox to toggle menu  */}  
        <input type="checkbox" ref={toggleVerticalMenu} name="open-menu" id="toggle-menu" />

        {/* Logo and user profile Container  */}
        <section className='flex items-center justify-between w-full py-2' >
            <Link className='flex' to={"/"} >
                <div className='w-[50px] h-[50px] max-sm:w-[44px] max-sm:h-[44px]'>
                    <img src={logo} alt="" className='w-full h-full'/>
                </div>
            </Link>
            <div className='flex items-center gap-3'>
              <Link className='bg-[#1b9ce3] text-white px-4 py-1 rounded-md hover:bg-[#2383b8]' to={"/"}>
                  Publish
                {/* <FaRegCircleUser className='text-[1.8rem] text-[#494949] max-sm:text-[1.6rem]'/> */}
              </Link>
              {/* Menu icon  */}
              <label htmlFor="toggle-menu" className='hover:cursor-pointer hidden max-lg:block '>
                <HiOutlineMenu className='text-[1.8rem] text-[#494949]'/>
              </label>
            </div>
        </section>

        {/*Vertical Navigation bar  */}
        <nav className='bg-[#2e2e2e] fixed top-0 h-screen  max-lg:overflow-y-scroll z-50 w-[40%] py-8 vertical-navbar max-sm:w-full'>

          <label htmlFor="toggle-menu" className='flex justify-end pr-8 hover:cursor-pointer'>
            <IoClose className='text-[1.8rem] text-white max-sm:text-[1.6rem] ' />
          </label>

          <div className='flex flex-col'>
            {/* Home  */}
            <Link style={currentLocation.pathname==='/'?{borderLeft:"5px solid #1b9ce3"}:null } onClick={handleVerticalNavClose} to={'/'} className='text-white py-4 px-8 hover:text-[#1b9ce3] hover:bg-[#7c7c7c4e] transition-colors'> {navItems.firstSet} </Link>

            {/* About  */}
            <div className='hover:cursor-pointer about-navitem-container ' onClick={()=>{
                setIsVerticalAboutOpen(!isVerticalAboutOpen)
            }
            }>
              <div style={currentLocation.pathname.includes('/about')?{borderLeft:"5px solid #1b9ce3"}:null } className='flex items-center gap-2 py-4 px-8 justify-between hover:bg-[#7c7c7c4e] about-navitem'>
                <span className='text-white '>About</span>
                <span className='text-white '><FaChevronDown /></span>
              </div>
              {/* Hidden navitems container  */}
              <div style={isVerticalAboutOpen?{display:"block"}:{display:"none"}}  className=' flex flex-col z-10'>
                {
                  navItems.secondSet.map((navItem)=>(
                      <Link  onClick={handleVerticalNavClose} key={navItem.id} to={`/about/${navItem.routeName}`} className='text-white capitalize py-3 transition-colors pl-12 hover:bg-[#7c7c7c4e] flex hidden-navitems-navitem' >
                        {navItem.navItem}
                      </Link>
                  ))
                }
              </div>
            </div>

                  
            {/*Editorial Board,..,faqs*/}
            {
              navItems.thirdSet.map((navItem)=>(
                <Link style={currentLocation.pathname===`/${navItem.routeName}`?{borderLeft:"5px solid #1b9ce3"}:null } onClick={handleVerticalNavClose} to={`/${navItem.routeName}`} className='text-white py-4 px-8 hover:text-[#1b9ce3] transition-colors hover:bg-[#7c7c7c4e]' key={navItem.id}>
                  {navItem.navItem}
                </Link>
              ))
            }
          </div>
        </nav>


        {/*Horizontal Navigation bar  */}
        <nav className='flex flex-wrap items-center gap-10 bg-[#2e2e2e] z-50 pl-6 max-lg:hidden'>
          
          {/* Home  */}
          <Link style={currentLocation.pathname==='/'?{borderBottom:"5px solid #1b9ce3"}:null }  to={'/'} className='text-white py-[.3rem]  hover:text-[#1b9ce3] transition-colors'> {navItems.firstSet} </Link>
          
          {/* About  */}
          <div className='relative z-50 hover:cursor-pointer about-navitem-container ' ref={horizontalAboutMenuRef} onClick={()=>{
                setIsHorizontalAboutOpen(!isHorizontalAboutOpen)
            }  
            } onMouseOver={()=>setIsHorizontalAboutOpen(true)} onMouseOut={()=>setIsHorizontalAboutOpen(false)}>
            <div  

                style={currentLocation.pathname.includes('/about')?{borderBottom:"5px solid #1b9ce3"}:null } className='flex items-center gap-2 about-navitem horizontal-about-navitem py-[.3rem]' >
              <span className='text-white '>About</span>
              <span className='text-white '><FaChevronDown /></span>
            </div>
            {/* Hidden navitems container  */}
            <div className={`${isHorizontalAboutOpen ? 'opacity-1 top-[105%] visible left-0' : 'opacity-0 top-[80%] invisible -left-0'} absolute transition-all  z-40 w-[300px]  hidden-navitems`} >
              <div className='flex flex-col  bg-white  mt-3 '>
                {
                  navItems.secondSet.map((navItem)=>(
                    <div key={navItem.id} className='px-4  hover:bg-[#cccccc94] flex hidden-navitems-navitem'>
                      <Link  to={`/about/${navItem.routeName}`} className='capitalize py-[.3rem] px-[1.5rem] transition-colors ' >{navItem.navItem}</Link>
                    </div>  
                  ))
                }
              </div>
            </div>
          </div>
          
          {/*Editorial Board,..,faqs*/}
          {
            navItems.thirdSet.map((navItem)=>(
              <Link style={currentLocation.pathname===`/${navItem.routeName}`?{borderBottom:"5px solid #1b9ce3"}:null } to={`/${navItem.routeName}`} className='text-white  py-[.3rem] hover:text-[#1b9ce3] transition-colors' key={navItem.id}>{navItem.navItem}</Link>
            ))
          }
        </nav>
          
      </div>
       
    </header>
  )
}

export default Header