import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center h-auto m-5'>
      <div className='flex grow justify-evenly max-w-2xl'>
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Treding" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image alt="Hulu Clone Logo" className='object-contain' src="https://file.swayechateau.com/view/clonesdETKUyECuiY3eyzohPi630" width={200} height={100}/>
    </header>
  )
}

export default Header