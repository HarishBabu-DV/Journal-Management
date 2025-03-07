import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router'
import { logo,FaRegCircleUser, FaChevronDown,HiOutlineMenu ,IoClose,navItems } from '../assets/assets'

const Header = () => {
  // About navitem toggle 
  const [isHorizontalAboutOpen,setIsHorizontalAboutOpen]=useState(false)
  const [isVerticalAboutOpen,setIsVerticalAboutOpen]=useState(false)
  const horizontalAboutMenuRef=useRef()
  const toggleVerticalMenu=useRef()
  const handleVerticalNavClose=()=>{
   toggleVerticalMenu.current.checked=false
  }
    // document.body.addEventListener('click',(event)=>{
    //   if(verticalNavItem.current.contains(event.target)){
    //     console.log('navitem clicked');
    //   }
    //   else{
    //     console.log('outside navitem clicked');
    //   }
    // })
  
  // // horizontalAboutNavItem.addEventListener('click',)
  // window.addEventListener('click',event=>{
  //   if(!hiddenAboutItems.contains(event.target) && event.target!== horizontalAboutNavItem){
  //     hiddenAboutItems.classList.add('hide-element')
  //   }
  // })
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
    <header className='bg-white fixed top-0 left-1/2 -translate-x-1/2 w-full px-[10%] max-lg:px-[5%]'>
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
        <nav className='bg-[#2e2e2e] fixed top-0 h-screen z-20 w-[40%] py-8 vertical-navbar max-sm:w-full'>

          <label htmlFor="toggle-menu" className='flex justify-end pr-8 hover:cursor-pointer'>
            <IoClose className='text-[1.8rem] text-white max-sm:text-[1.6rem] ' />
          </label>

          <div className='flex flex-col'>
            {/* Home  */}
            <Link onClick={handleVerticalNavClose} to={'/'} className='text-white py-4 px-8 hover:text-[#1b9ce3] hover:bg-[#7c7c7c4e] transition-colors'> {navItems.firstSet} </Link>

            {/* About  */}
            <div className='hover:cursor-pointer about-navitem-container ' onClick={()=>{
                setIsVerticalAboutOpen(!isVerticalAboutOpen)
            }
            }>
              <div className='flex items-center gap-2 py-4 px-8 justify-between hover:bg-[#7c7c7c4e] about-navitem'>
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
                <Link onClick={handleVerticalNavClose} to={'/'} className='text-white py-4 px-8 hover:text-[#1b9ce3] transition-colors hover:bg-[#7c7c7c4e]' key={navItem.id}>
                  {navItem.navItem}
                </Link>
              ))
            }
          </div>
        </nav>


        {/*Horizontal Navigation bar  */}
        <nav className='flex flex-wrap items-center gap-10 bg-[#2e2e2e] relative pl-6 max-md:hidden'>
          
          {/* Home  */}
          <Link to={'/'} className='text-white py-[.3rem]  hover:text-[#1b9ce3] transition-colors'> {navItems.firstSet} </Link>
          
          {/* About  */}
          <div className='relative hover:cursor-pointer about-navitem-container ' ref={horizontalAboutMenuRef} onClick={()=>{
                setIsHorizontalAboutOpen(!isHorizontalAboutOpen)
            }
            }>
            <div  className='flex items-center gap-2 about-navitem horizontal-about-navitem' >
              <span className='text-white '>About</span>
              <span className='text-white '><FaChevronDown /></span>
            </div>
            {/* Hidden navitems container  */}
            <div style={isHorizontalAboutOpen ? {display:"block"}:{display:"none"}}  className='absolute top-[130%] bg-white left-0 w-[300px]  hidden-navitems'>
              <div className='flex flex-col'>
                {
                  navItems.secondSet.map((navItem)=>(
                    <div key={navItem.id} className='px-4  hover:bg-[#cccccc94] flex hidden-navitems-navitem'>
                      <Link to={`/about/${navItem.routeName}`} className='capitalize py-[.3rem] px-[1.5rem] transition-colors ' >{navItem.navItem}</Link>
                    </div>  
                  ))
                }
              </div>
            </div>
          </div>
          
          {/*Editorial Board,..,faqs*/}
          {
            navItems.thirdSet.map((navItem)=>(
              <Link to={'/'} className='text-white  py-[.3rem] hover:text-[#1b9ce3] transition-colors' key={navItem.id}>{navItem.navItem}</Link>
            ))
          }
        </nav>
          
        {/* Sidebar  */}
        <aside className='w-[15%] bg-green-300 h-[60vh] right-[10%] absolute top-[120%] max-lg:right-[5%] max-md:hidden'>
          <p>hello i am sidebar</p>
        </aside>
        <Outlet />
    </header>
  )
}

export default Header