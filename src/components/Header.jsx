import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/assets'

const Header = () => {
  return (
    <header className='w-full h-[10vh] bg-slate-200'>
        {/* Logo and user profile Container  */}
        <section className=''>
            <Link className='' to={"/"}>
                <div className='w-[60px] h-[60px]'>
                    <img src={logo} alt="" className='w-full h-full'/>
                </div>
            </Link>
            <Link className='' to={"/"}>
              
            </Link>
        </section>
        {/* Navigation bar  */}
        <nav>

        </nav>
    </header>
  )
}

export default Header