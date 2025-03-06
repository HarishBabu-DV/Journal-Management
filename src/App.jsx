import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    // App Container  
    <main className='max-w-[1920px] mx-auto w-full  relative'>
      {/* Header  */}
      <Header />
      {/* <Routes>
        <Route path='/' element={<Header />} />
      </Routes> */}
      
    </main>
  )
}

export default App