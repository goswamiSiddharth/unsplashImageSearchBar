import React from 'react'

const Skeleton = ({item}) => {
  return [...Array(item).keys()].map((index) => (
    <div key={index} className='animate-pulse'>
        <div className='bg-gray-300 rounded-lg h-72'></div>
    </div>
  ))
}

export default Skeleton
