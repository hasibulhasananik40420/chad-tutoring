import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1920px] mx-auto 2xl:px-[300px] lg:px-[130px] md:px-10 px-4'>
        {children}
    </div>
  )
}

export default Container