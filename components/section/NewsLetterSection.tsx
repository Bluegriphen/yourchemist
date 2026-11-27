import React from 'react'
import Button from '../ui/Button'
import NewsLetterIcon from '../icons/NewsLetterIcon'

const NewsLetterSection = () => {
  return (
    <section className='w-full  flex justify-center relative overflow-hidden'>
      <div className='container-page flex flex-col gap-8 justify-center relative'>
        <div className='mx-auto w-full max-w-[822px] flex flex-col gap-6 sm:gap-8 lg:gap-11 justify-center z-10'>
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
        
        
        <span className="pointer-events-none inset-x-0 bottom-0 mx-auto w-[150%] max-w-[1053px] opacity-10 sm:w-[110%] lg:w-[1053px]">
          <NewsLetterIcon/>
        </span>
       
      </div>
    </section>
  )
}

export default NewsLetterSection
