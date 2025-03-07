import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Journal from './pages/Journal'
import AuthorGuidelines from './pages/AuthorGuidelines'

const App = () => {
  return (
    // App Container  
    <main className='max-w-[1920px] mx-auto w-full relative'>
      {/* Header  */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/journal' element={<Journal />} /> 
        <Route path='/about/author-guidelines' element={<AuthorGuidelines />} />
        {/* <Route path='/submission-and-review-process' element={<Home />} /> */}
        {/* <Route path='/current-and-past-issues' element={<Home />} /> */}
        {/* <Route path='/research-ethics-and-policies' element={<Home />} /> */}
        {/* <Route path='/indexing-and-abstracting' element={<Home />} /> */}
        {/* <Route path='/reviewer-guidelines' element={<Home />} /> */}
      </Routes>
    </main>
  )
}

export default App