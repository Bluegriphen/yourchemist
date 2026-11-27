import React from 'react'
import Image from 'next/image'
import photo1 from '@/public/images/image.png'
import HorizontalBar from './HorizontalBar'
import UserIcon from '../icons/UserIcon'
import FileIcon from '../icons/FileIcon'
import Link from 'next/link'
const BlogCard = () => {
  return (
    <div className="w-[425px] h-[539px]">
      <div className="relative w-full h-full relative rounded-card border border-[#DFDFDF] overflow-hidden shadow-[0px_4.32px_19.82px_0px_#00000007,0px_14.52px_66.56px_0px_#0000000B,0px_65px_250px_0px_#00000012]">
        <Image
          src={photo1}
          alt="photo"
          fill
          className="object-cover"
        />

        {/* Linear Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_20.96%,#FFFFFF_88.5%)]" />

    {/* Horizontal bar  */}
    <div className="absolute right-10">
        <HorizontalBar/>
    </div>

    <div className="absolute bottom-7 left-7">
        
        <div className='flex flex-col gap-4'>
            <div className='flex gap-[23px]'>
               <p className='flex gap-2 font-[400] text-[14px] text-dark-gray'>
                    <span><FileIcon/></span>Lifestyle & Wellness</p>
                <p className='flex gap-2 font-[400] text-[14px] text-dark-gray'>
                    <span><UserIcon/></span>By Admin</p>
            </div>
            <p className='text-main font-[600] text-[20px]'>Managing Seasonal Allergies: <br/> Simple Steps for Relief</p>
            
            <Link href="#" className='text-primary font-[600]text-[16px] gap-1 flex'>Read More
            
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12L20 12M14 6L20 12L14 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#70B916"/>
</svg>
</Link>
        </div>
    </div>
      </div>
    </div>
  )
}

export default BlogCard
