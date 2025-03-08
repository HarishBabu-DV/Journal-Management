import React from 'react'
import { useLocation } from 'react-router'

const ContactUs = ({classname}) => {
  // To retrieve routes 
   const currentLocation=useLocation()
  return (
    <article className={`${classname} max-md:pt-[80px]`}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/contact-us' ?
                <p className='text-gray-400 font-medium'>About {">"} Contact Us</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>Contact Us</h1>
    </article>
  )
}

export default ContactUs