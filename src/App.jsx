import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    // App Container  
    <main className='max-w-[1920px] mx-auto w-full relative'>
      {/* Header  */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
  )
}

export default App