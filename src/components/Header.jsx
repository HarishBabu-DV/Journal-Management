import React from 'react'
import { Link } from 'react-router'
import { logo,FaRegCircleUser, CircleUser } from '../assets/assets'

const Header = () => {
  return (
    <header className='w-full h-[20vh] '>
        {/* Logo and user profile Container  */}
        <section className='flex items-center justify-between w-full h-1/2 px-[8%]'>
            <Link className='' to={"/"}>
                <div className='w-[50px] h-[50px] max-sm:w-[44px] max-sm:h-[44px]'>
                    <img src={logo} alt="" className='w-full h-full'/>
                </div>
            </Link>
            <Link className='' to={"/"}>
              <FaRegCircleUser className='text-3xl text-[#636363] max-sm:text-[1.6rem]'/>
            </Link>
        </section>
        {/* Navigation bar  */}
        <nav>

        </nav>
    </header>
  )
}

export default Header