import React from 'react'
import Link from 'next/link'
import Botton from '@/components/botton'

const page = () => {
  return (
    <div>
      This is Archive
      <Botton><Link href='/dashbord'>Back to default</Link></Botton>
    </div>
  )
}

export default page
