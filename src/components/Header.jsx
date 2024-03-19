import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className=' w-full p-3'>
      <ul className=' flex flex-row justify-evenly text-center'>
        <li><Link href='/contect'>Contect</Link></li>
        <li>About</li>
        <li>User</li>
        <li><Link href='/login'>Authentication</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    </div>
  )
}

export default Header
