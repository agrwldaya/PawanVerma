import React from 'react'
import Hero from './components/Home/Hero'
import Books from './components/Home/Books'
import AvailableOn from './components/Home/AvailableOn'
import Gallery from './components/Home/Gallery'
import Videos from './components/Home/Videos'
import Blogs from './components/Home/Blogs'
import Testimonials from './components/Home/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <Books />
      <AvailableOn/>
      <Gallery />
      <Videos />
      <Blogs />
      <Testimonials/>
    </div>
  )
}
