import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      User page
      <div>
      <Link href="/users">Navigate to users page</Link>
      </div>
    </div>
  )
}

export default page
