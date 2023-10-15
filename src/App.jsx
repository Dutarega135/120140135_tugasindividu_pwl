import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './componnents/home'
import About from './componnents/about'
import Contact from './componnents/contact'
import Navbar from './componnents/navbar'
import Footer from './componnents/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
