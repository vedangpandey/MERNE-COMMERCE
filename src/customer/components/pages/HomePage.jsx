import React from 'react'
import MainCarousel from '../HomeCarousel/MainCarousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import HomeSectionCarosel from '../HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel />
            <HomeSectionCarosel />
            <HomeSectionCarosel />
            <HomeSectionCarosel />
            <HomeSectionCarosel />
            <HomeSectionCarosel />
        </div>
    </div>
  )
}

export default HomePage