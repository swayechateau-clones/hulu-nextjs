import React from 'react'

const HeaderItem = ({title, Icon}) => {
  return (
    <div className='flex flex-col items-center cursor-pointer w-12 group sm:w-20 hover:text-white '>
        <Icon className="h-8 group-hover:animate-bounce"/>
        <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem