import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      Welcome to users page
      <div className=' text-blue-500'>
      <Link href='/users/posts'>Next page</Link>
      </div>
    </div>
  )
}

export default page
