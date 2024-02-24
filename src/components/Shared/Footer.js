import Image from 'next/image'
import Container from './Container'
import call from '@/assets/call.svg'
import inbox from '@/assets/inbox.svg'
const Footer = () => {
  return (
    <div className='bg-white'>
        <Container>
            <div className='md:mt-[100px] mt-[50px] md:mb-[170px] mb-[100px] lg:flex items-center gap-[120px] justify-center'>

                <div>
                   <h1 className='text-[36px] font-normal leading-[48px] text-[#242424]'><span className='text-[#069A71] font-semibold'>Contact</span> me</h1>
                </div>

                 {/* <div className='mt-10 md:mt-14 lg:mt-0'>
                    <Image className='w-12 h-12' src={call} alt='call icon'/>
                    <h1 className='mt-4 text-[#242424] text-[20px] font-medium lowercase leading-[30px]' >804-762-0435</h1>
                 </div>

                  <div className='mt-10 md:mt-14 lg:mt-0'>
                    <Image className='w-12 h-12' src={inbox} alt='call icon'/>
                    <h1 className='mt-4 text-[#242424] text-[20px] font-medium lowercase leading-[30px]' >chadstutoring@gmail.com</h1>
                 </div> */}

<div className='mt-10 md:mt-14 lg:mt-0'>
      <Image className='w-12 h-12' src={call} alt='call icon' />
      <h1 className='mt-4 text-[#242424] text-[20px] font-medium lowercase leading-[30px]'>
        <a href='tel:8047620435'>804-762-0435</a>
      </h1>
    </div>

    <div className='mt-10 md:mt-14 lg:mt-0'>
      <Image className='w-12 h-12' src={inbox} alt='call icon' />
      <h1 className='mt-4 text-[#242424] text-[20px] font-medium lowercase leading-[30px]'>
        <a href='mailto:chadstutoringrva@gmail.com'>chadstutoringrva@gmail.com</a>
      </h1>
    </div>

            </div>
        </Container>
    </div>
  )
}

export default Footer