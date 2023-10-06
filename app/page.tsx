import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Project from './components/Project'
import Questions from './components/Questions'

const layout = ({children }: {children: React.ReactNode}) => {
  return (
    <React.Fragment>
      <main>
        <section className='container-global'>
          <Hero/>
        </section>
        <section className='container-global'>
          <Services />
        </section>
        <section className='container-global'>
          <Project/>
        </section>
        <section className='container-global'>
          <Questions />
        </section>
      </main>
    </React.Fragment>
  )
}

export default layout