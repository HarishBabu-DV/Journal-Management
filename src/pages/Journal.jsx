import React from 'react'
import { aboutJournal } from '../assets/assets'

const Journal = () => {  
  return (
    <article >
        {/* Heading  */}
        <h1 className=' text-[#134275] border-b-[3px] py-4 border-gray-400 text-3xl font-bold'>About the Journal</h1>

        {/* About the Journal */}
        <section className='py-5 text-justify space-y-5'>
            {/* First Section  */}
            { aboutJournal?.firstSection.map((content)=>(
              <div className='space-y-3' key={content.id}>
                <h2 className='text-xl font-medium'>{content.subheading}</h2>
                <p className='font-normal text-[1rem] text-[#555555] '>{content.description}</p>
              </div>
            )) 
            } 

            {/* Second Section  */}
            <div className='space-y-3'>
                <h2 className='text-xl font-medium'>{aboutJournal?.lastSection.subheading}</h2>
                {
                  aboutJournal?.lastSection.descriptionArray.map((content)=>(
                    <p key={content.id} className='font-normal text-[1rem] text-[#555555] '>{content.description}</p>
                    )
                  )
                }
            </div>
        </section>

      
    </article>
  )
}

export default Journal