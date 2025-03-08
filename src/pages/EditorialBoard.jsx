import React from 'react'
import { useLocation } from 'react-router'

const EditorialBoard = ({classname}) => {
   // To retrieve routes 
   const currentLocation=useLocation()
  return (
    <article className={`${classname} max-md:pt-[80px]`}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/editorial-board' ?
                <p className='text-gray-400 font-medium'>About {">"} Editorial Board</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>Editorial Board</h1>
    </article>
  )
}

export default EditorialBoard