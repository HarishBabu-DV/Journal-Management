import React from 'react'
import { useLocation } from 'react-router'

const CurrentAndPastIssues = ({classname}) => {
   // To retrieve routes 
   const currentLocation=useLocation()
  return (
    <article className={`${classname} max-md:pt-[80px]`}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/about/current-and-past-issues' ?
                <p className='text-gray-400 font-medium'>About {">"} Current and Past Issues</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>Current and Past Issues</h1>
  </article>
  )
}

export default CurrentAndPastIssues