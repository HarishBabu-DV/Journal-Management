import React from 'react'
import { useLocation } from 'react-router'

const ReviewerGuidelines = ({classname}) => {
   // To retrieve routes 
   const currentLocation=useLocation()
  return (
    <article className={`${classname} `}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/about/reviewer-guidelines' ?
                <p className='text-gray-400 font-medium'>About {">"} Reviewer Guidelines</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>Reviewer Guidelines</h1>
    </article>
  )
}

export default ReviewerGuidelines