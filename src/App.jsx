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

const App = () => {
  return (
    // App Container  
    <main className='max-w-[1920px] mx-auto w-full relative'>

        {/* Header  */}
        <Header />
        <Routes>
          {/* Home  */}
          <Route path='/' element={<Home />} />
          {/* About  */}
          <Route path='/about/journal' element={<Journal />} /> 
          <Route path='/about/author-guidelines' element={<AuthorGuidelines />} />
          <Route path='/about/submission-and-review-process' element={<SubmissionAndReviewProcess />} />
          <Route path='/about/current-and-past-issues' element={<CurrentAndPastIssues />} />
          <Route path='/about/research-ethics-and-policies' element={<ResearchEthicsAndPolicies />} />
          <Route path='/about/indexing-and-abstracting' element={<IndexingAndAbstracting />} />
          <Route path='/about/reviewer-guidelines' element={<ReviewerGuidelines />} />

          {/* Editorial Board  */}
          <Route path='/editorial-board' element={<EditorialBoard />} />
          {/* Call For Papers  */}
          <Route path='/call-for-papers' element={<CallForPapers />} />
          {/* Contact Us  */}
          <Route path='/contact-us' element={<ContactUs />} />
          {/* FAQ's  */}
          <Route path='/faqs' element={<Faqs />} />

        </Routes>
        
    </main>
  )
}

export default App