import React from 'react'
import Navbar from './components/navbar'
import HomePageSection from './components/Homepagesection'
import Footer from './components/footer'
import About from './components/about'
import Blog from './components/blogs'
import Contact from './components/contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePageSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
