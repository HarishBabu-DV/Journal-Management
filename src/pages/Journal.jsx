import React from 'react'
import { useLocation } from 'react-router'

const Journal = () => {

  const currentLocation=useLocation()
  return (
    <article className='w-full pt-[130px] pl-[10%] pr-[27%] max-lg:pl-[5%] max-lg:pr-[22%] max-md:pr-[5%] max-md:pt-[80px]'>
         {/* Path  */}
         <div>
            {
                currentLocation?.pathname === '/about/journal' ?
                    <p className='text-gray-400 font-medium'>About {">"} Journal</p> :
                    null
            }
        </div>

        {/* Aim  */}
        <div>
          <h1 className='text-[#134275] border-b-[3px] py-4 border-gray-400 text-3xl font-bold'>Aims</h1>
          
          <p className='py-4 font-normal text-[1rem] text-[#555555] '>
          JMELL aims to promote high-quality research in modern English language and literature by fostering innovative ideas, theoretical advancements, and methodological diversity. The journal seeks to facilitate intellectual discussions that enhance understanding of contemporary linguistic and literary developments. By providing a global platform for scholarly exchange, JMELL encourages original research that contributes to the evolving discourse in English studies.
          </p>
        </div>

      
    </article>
  )
}

export default Journal