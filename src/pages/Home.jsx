import React from 'react'
import { useLocation } from 'react-router'

const Home = () => {
    // To retrieve routes 
    const location=useLocation();
    console.log(location);
    
    return (
    <section className='w-full mt-[10%] pl-[10%] pr-[27%] max-lg:pl-[5%] max-lg:pr-[22%] max-md:pr-[5%]'>
        {/* Path  */}
        <div>
            {
                location?.pathname === '/' ?
                    <p className='text-gray-400 font-medium'>Home</p> :
                    null
            }
        </div>
    </section>
  )
}

export default Home