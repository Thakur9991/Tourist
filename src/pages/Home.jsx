import React from 'react'
import Hero from '../components/Hero'
import DestinationSection from '../components/DestinationSection'
import PopularTours from '../components/PopularTours'
import AboutSection from '../components/AboutSection'
import BlogSection from '../components/BlogSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <DestinationSection/>
      <PopularTours/>
      <AboutSection/>
      <BlogSection/>
    </div>
  )
}

export default Home
