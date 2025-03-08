import React from 'react'
import { useLocation } from 'react-router';

const AuthorGuidelines = ({classname}) => {

  // To retrieve routes 
  const currentLocation=useLocation();

  return (
    <article className={`${classname} max-md:pt-[80px]`}>
        {/* Path  */}
        <div>
            {
                currentLocation?.pathname === '/about/author-guidelines' ?
                    <p className='text-gray-400 font-medium'>About {">"} Author Guidelines</p> :
                    null
            }
        </div>

        {/* Heading  */}
        <h1 className='heading-style'>Author Guidelines</h1>

    </article>
  )
}

export default AuthorGuidelines