import React from 'react'
import { useLocation } from 'react-router'

const CallForPapers = ({classname}) => {
  // To retrieve routes 
  const currentLocation=useLocation()
  return (
    <article className={`${classname} max-md:pt-[80px]`}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/call-for-papers' ?
                <p className='text-gray-400 font-medium'>About {">"} Call For Papers</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>Call For Papers</h1>
    </article>
  )
}

export default CallForPapers