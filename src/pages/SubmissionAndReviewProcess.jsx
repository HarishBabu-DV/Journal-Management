import React from 'react'
import { useLocation } from 'react-router'

const SubmissionAndReviewProcess = ({classname}) => {
  // To retrieve routes 
  const currentLocation=useLocation()
  return (
    <article className={`${classname} max-md:pt-[80px]`}>
      {/* Path  */}
      <div>
            {
                currentLocation?.pathname === '/about/submission-and-review-process' ?
                    <p className='text-gray-400 font-medium'>About {">"} Submission and Review Process</p> :
                    null
            }
      </div>

      {/* Heading  */}
      <h1 className='heading-style'>Submission and Review Process</h1>
    </article>
  )
}

export default SubmissionAndReviewProcess