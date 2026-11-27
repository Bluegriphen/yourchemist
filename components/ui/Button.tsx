import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  href?:string;
  children:ReactNode;
  className?: string;
}

const Button = ({children, className = '', ...props}:ButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-primary py-4 px-6 flex justify-center items-center gap-2.5 rounded-[100px] cursor-pointer ${className}`}
    >
            <span className='font-semibold font-agenda  text-[16px] text-white text-center'>{children}</span>
          </button>
  )
}

export default Button