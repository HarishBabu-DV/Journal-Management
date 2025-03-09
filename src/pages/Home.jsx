import React from 'react'
import { useLocation } from 'react-router'

const Home = ({classname}) => {

    const currentLocation=useLocation()
    return (
    <article className={`${classname} `}>
        {/* Path  */}
        <div>
            {
                currentLocation?.pathname === '/' ?
                    <p className='text-gray-400 font-medium'>Home</p> :
                    null
            }
        </div>
        {/* Heading  */}
        <h1 className='heading-style'>Journal of Modern English Language and Literature</h1>

        {/* Welcome Message  */}
        <section className='space-y-5 py-5 text-justify'>
            <p className=' font-normal text-[1rem] text-[#555555] '>
            Welcome to the <b>Journal of Modern English Language and Literature (JMELL),</b>  the official scholarly publication of the <b>Society for Modern English Research (SMER)</b>. JMELL is dedicated to advancing research and fostering academic discourse in modern English studies. As a leading interdisciplinary journal, it provides a dynamic platform for researchers, educators, and professionals to engage with contemporary linguistic, literary, and theoretical developments.
            </p>

            <p className=' font-normal text-[1rem] text-[#555555] '>
            JMELL invites scholars to contribute their original research, theoretical perspectives, and critical analyses that shape the evolving landscape of modern English language, literature, and communication. The journal ensures the highest academic standards through rigorous peer review, making JMELL a valuable resource for the global research community.
            </p>

            <p className=' font-normal text-[1rem] text-[#555555] '>
            Join us in our mission to explore the frontiers of modern English studies and contribute to the collective growth of knowledge in this ever-expanding field.
            </p>
        </section>
        
      
    </article>
  )
}

export default Home