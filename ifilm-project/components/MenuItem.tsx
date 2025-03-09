import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';

export default function MenuItem({ title, address, Icon }: { title:string; address:string; Icon: IconType}) {
  return (
    <Link href={address} className='hover:text-blue-500'>
        <Icon className = "text-2xl sm:hidden"/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
  