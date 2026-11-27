import React from 'react'
import StatsCard from '../ui/StatsCard'

const StatsSection = () => {
  return (
    <section className="flex justify-center w-full ">
      <div className="max-w-[1300px] w-full px-[32px]">
         <div className='flex gap-[208px]'>
      <StatsCard/>
      <StatsCard/>
      <StatsCard/>
      <StatsCard/>
      
    </div>
      </div>
     
    </section>
    
  )
}

export default StatsSection
