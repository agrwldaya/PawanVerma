import React from 'react'
import Hero from './Home/Hero'
import Books from './Home/Books'
import AvailableOn from './Home/AvailableOn'
import Gallery from './Home/Gallery'
import Videos from './Home/Videos'
import Blogs from './Home/Blogs'
import Testimonials from './Home/Testimonials'

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
