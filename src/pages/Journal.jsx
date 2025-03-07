import React from 'react'
import { useLocation } from 'react-router';

const Journal = () => {
  // To retrieve routes 
  const location=useLocation();
  console.log(location);
   
  return (
    <section className='w-full pt-[130px] pl-[10%] pr-[27%] max-lg:pl-[5%] max-lg:pr-[22%] max-md:pr-[5%]'>
         {/* Path  */}
         <div>
            {
                location?.pathname === '/about/journal' ?
                    <p className='text-gray-400 font-medium'>About {">"} Journal</p> :
                    null
            }
        </div>
    </section>
  )
}

export default Journal