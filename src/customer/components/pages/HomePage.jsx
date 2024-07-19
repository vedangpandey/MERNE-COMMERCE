import React from 'react'
import MainCarousel from '../HomeCarousel/MainCarousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import HomeSectionCarosel from '../HomeSectionCarosel/HomeSectionCarosel'
import { men_kurta } from '../../../data/men_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col  justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={men_kurta} sectionName={"Men's kurta"}/>
            <HomeSectionCarosel data={men_kurta} sectionName={"Men's shoes"}/>
            <HomeSectionCarosel data={men_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel data={men_kurta} sectionName={"Women's Saree"}/>
            <HomeSectionCarosel data={men_kurta} sectionName={"Women's Dress"}/>
            
        </div>
    </div>
  )
}

export default HomePage