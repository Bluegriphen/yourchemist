import React from 'react'
import { StateOne } from '../icons/StatsIcon'
const StatsCard = () => {
  return (
    <div className='flex flex-col justify-center max-w-[136px] max-h-[196px] w-full h-full gap-[24px]'>
      <span className='flex justify-center'><StateOne/></span>
      <div className='flex flex-col gap-[16px] text-center'>
        <h2>95%</h2>
        <p className="text-gray text-[16px] font-[400]">Patient Satisfaction Rate</p>
      </div>
    </div>
  )
}

export default StatsCard
