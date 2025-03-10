import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Journal from './pages/Journal'
import AuthorGuidelines from './pages/AuthorGuidelines'
import SubmissionAndReviewProcess from './pages/SubmissionAndReviewProcess'
import CurrentAndPastIssues from './pages/CurrentAndPastIssues'
import ResearchEthicsAndPolicies from './pages/ResearchEthicsAndPolicies'
import IndexingAndAbstracting from './pages/IndexingAndAbstracting'
import ReviewerGuidelines from './pages/ReviewerGuidelines'
import EditorialBoard from './pages/EditorialBoard'
import CallForPapers from './pages/CallForPapers'
import ContactUs from './pages/ContactUs'
import Faqs from './pages/Faqs'
import BreadCrumb from './components/BreadCrumb'

const App = () => {
  return (
    <>
    {/* Header  */}
    <Header />
    
    {/* App Container   */}
    <main className='max-w-[1920px] mx-auto px-[10%] max-lg:px-[5%] pt-[130px] max-lg:pt-[80px] w-full flex gap-10'>
        
        <section className='w-[80%] max-lg:w-full'>
          {/* Breadcrumb  */}
          <BreadCrumb />
          <Routes>
            {/* Home  */}
            <Route path='/' element={<Home />} />
            {/* About  */}
            <Route path='/about/journal' element={<Journal/>} /> 
            <Route path='/about/author-guidelines' element={<AuthorGuidelines />} />
            <Route path='/about/submission-and-review-process' element={<SubmissionAndReviewProcess />} />
            <Route path='/about/current-and-past-issues' element={<CurrentAndPastIssues />} />
            <Route path='/about/research-ethics-and-policies' element={<ResearchEthicsAndPolicies />} />
            <Route path='/about/indexing-and-abstracting' element={<IndexingAndAbstracting/>} />
            <Route path='/about/reviewer-guidelines' element={<ReviewerGuidelines />} />

            {/* Editorial Board  */}
            <Route path='/editorial-board' element={<EditorialBoard />} />
            {/* Call For Papers  */}
            <Route path='/call-for-papers' element={<CallForPapers/>} />
            {/* Contact Us  */}
            <Route path='/contact-us' element={<ContactUs/>} />
            {/* FAQ's  */}
            <Route path='/faqs' element={<Faqs/>} />

          </Routes>
        </section>
        
        {/* Sidebar  */}
        <aside className='w-[20%] border bg-gray-300 h-full mt-[130px] p-3 max-lg:hidden'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam minima maiores, error quia eveniet magnam saepe vitae veritatis, quos dicta unde nisi repudiandae reiciendis eaque nemo reprehenderit! Odio, nobis?</p>
        </aside>

    </main>

    </>
  )
}

export default App