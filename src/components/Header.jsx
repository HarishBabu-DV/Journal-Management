import React from 'react'
import { Link } from 'react-router'
import { logo,FaRegCircleUser } from '../assets/assets'

const Header = () => {
  return (
    <header className='w-full h-[20vh] '>
        {/* Logo and user profile Container  */}
        <section className='flex items-center justify-between w-full h-1/2 px-[8%]'>
            <Link className='' to={"/"}>
                <div className='w-[40px] h-[40px] max-sm:w-[35px] max-sm:h-[35px]'>
                    <img src={logo} alt="" className='w-full h-full'/>
                </div>
            </Link>
            <Link className='' to={"/"}>
              <FaRegCircleUser className='text-3xl max-sm:text-2xl' />
            </Link>
        </section>
        {/* Navigation bar  */}
        <nav>

        </nav>
    </header>
  )
}

export default Header