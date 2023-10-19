import React from 'react'

const Background = ({children}) => {
  return (
    <div className='bg-gray-900 flex items-center py-10'>
      <div className='max-w-wd mx-auto w-[450px]'>
        <h1 className='text-white text-center text-2xl font-bold mb-5'>
            Find Images
        </h1>
        {children}
      </div>
    </div>
  )
}

export default Background
