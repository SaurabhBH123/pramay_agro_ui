import React, { useEffect } from 'react'
import Navigation from './Routing/Navigation'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import Translates from './components/Translates'

const App = () => {

  return (
    <div className='mt-0'>
      {/* <Translates /> */}
      
      <Navbar/>
      {/* <div className='mt-24 '> */}
      {/* <Translates/>   */}
      {/* </div> */}
      
      <Navigation />
      
      <Footer />
    </div>
  )
}

export default App
