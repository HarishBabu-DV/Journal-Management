import React from 'react'
import { useLocation } from 'react-router'

const ResearchEthicsAndPolicies = ({classname}) => {
   // To retrieve routes 
   const currentLocation=useLocation()
  return (
    <article className={`${classname} `}>
    {/* Path  */}
    <div>
          {
            currentLocation?.pathname === '/about/research-ethics-and-policies' ?
                <p className='text-gray-400 font-medium'>About {">"} Research Ethics and Policies</p> :
                null
          }
    </div>

    {/* Heading  */}
    <h1 className='heading-style'>Research Ethics and Policies</h1>
    </article>
  )
}

export default ResearchEthicsAndPolicies