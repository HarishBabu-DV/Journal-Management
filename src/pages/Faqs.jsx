import React from 'react'
import { useLocation } from 'react-router'

const Faqs = ({classname}) => {
  // To retrieve routes 
    const currentLocation=useLocation()
  return (
    <article className={`${classname} max-md:pt-[80px]`}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/faqs' ?
                <p className='text-gray-400 font-medium'>About {">"} FAQ's</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>FAQ's</h1>
    </article>
  )
}

export default Faqs