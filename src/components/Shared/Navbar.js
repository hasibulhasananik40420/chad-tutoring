/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-white sticky top-0 left-0 z-50'>
        <Container>
            <div className='flex items-center h-[92px]'>
               <Link href={'/'}>
               
                <span className='text-[#069A71] text-[32px] font-light leading-[44px]'>Chad's </span>
                  <span className='text-[#069A71] text-[32px] font-bold leading-[44px]'> Tutoring </span>
                
               </Link>
            </div>
        </Container>
    </div>
  )
}

export default Navbar