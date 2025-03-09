import React from 'react'
import { useLocation } from 'react-router'

const IndexingAndAbstracting = ({classname}) => {
   // To retrieve routes 
   const currentLocation=useLocation()
  return (
    <article className={`${classname} `}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/about/indexing-and-abstracting' ?
                <p className='text-gray-400 font-medium'>About {">"} Indexing and Abstracting</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>Indexing and Abstracting</h1>
    </article>
  )
}

export default IndexingAndAbstracting