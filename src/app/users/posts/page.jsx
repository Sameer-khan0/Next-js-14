import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <h1 className=' font-bold'>Users list</h1>
      <ul><Link href='posts/332'>jhone</Link></ul>
      <ul><Link href='posts/32'>toney</Link></ul>
    </div>
  )
}

export default page
