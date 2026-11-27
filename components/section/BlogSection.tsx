import React from 'react'
import BlogBg from '../icons/BlogBg'
import BlogCard from '../ui/BlogCard'

const BlogSection = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden">
        <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[281px] w-full">
          <BlogBg/>
        </span>
        <div className='container-page relative z-10 flex justify-center '>
          <div className='flex w-full max-w-[1319px] py-15 h-full flex-col justify-center'>
            <h2 className='text-center pb-10'>Stay Informed, Stay Healthy</h2>
            <div className='flex gap-[24px]'>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default BlogSection
