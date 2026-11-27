import React from 'react'
import Button from '../ui/Button'
import TreatmentCard from '../home/treatment/TreatmentCard'

const NewsLetterSection = () => {
  return (
    <section className='w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-20 flex justify-center relative overflow-hidden'>
      <div className='container-page flex justify-center relative'>
        <div className='mx-auto w-full max-w-[822px] flex flex-col gap-6 sm:gap-8 lg:gap-11 justify-center'>
          <h2 className='text-2xl sm:text-[32px] lg:text-[40px] leading-tight font-semibold text-center'>
            Subscribe to Our Newsletter
          </h2>
          <p className='mx-auto max-w-[700px] text-center font-normal text-sm sm:text-[16px] leading-6 text-gray'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text.
          </p>
          <form className='mx-auto w-full max-w-[551px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 p-2 sm:p-[7px] border border-primary bg-[#B2D23633] rounded-[24px] sm:rounded-[100px]'>
            <label htmlFor='newsletter-email' className='sr-only'>
              Email address
            </label>
            <input
              id='newsletter-email'
              type='email'
              name='email'
              required
              placeholder='Enter your email address'
              className='min-w-0 w-full h-12 sm:h-10.75 px-4 sm:px-5 bg-transparent outline-none placeholder:text-gray border-none text-[15px] sm:text-[16px]'
            />
            <Button >Submit</Button>
          </form>
        </div>
        
        
        <span></span>
      </div>
    </section>
  )
}

export default NewsLetterSection
