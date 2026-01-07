import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-1.25'>
        <Image src='/assets/logo.svg' alt='image' width={28} height={28} />
        <p className='text-2xl font-medium'>cohort</p>
    </div>
  )
}

export default Logo