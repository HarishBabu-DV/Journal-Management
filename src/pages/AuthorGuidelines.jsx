import React from 'react'
import { useLocation } from 'react-router';

const AuthorGuidelines = () => {
  // To retrieve routes 
  const location=useLocation();
  console.log(location);
  return (
    <section className='w-full pt-[130px] pl-[10%] pr-[27%]'>
        {/* Path  */}
        <div>
            {
                location?.pathname === '/about/author-guidelines' ?
                    <p className='text-gray-400 font-medium'>About {">"} Author Guidelines</p> :
                    null
            }
        </div>
    </section>
  )
}

export default AuthorGuidelines