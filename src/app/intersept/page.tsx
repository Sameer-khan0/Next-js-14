import React from 'react'
import Link from 'next/link'
import Botton from '@/components/botton'

const page = () => {
  return (
    <div>
        Intersept page
        <Botton>
            <Link href="/intersept/page">Go to page</Link>
        </Botton>
    </div>
  )
}

export default page
