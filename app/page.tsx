'use client'

import About from '@/components/about'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import Hero from '@/components/hero'
import { Projects } from '@/components/projects'
import React from 'react'

export default function Page(){
  return(
    <div className='md:m-auto md:w-full'>
      <Hero/>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}