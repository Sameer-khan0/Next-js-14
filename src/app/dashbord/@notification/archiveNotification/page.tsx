import React from 'react'
import Link from 'next/link'
import Botton from '@/components/botton'
import Card from '@/components/card'

const page = () => {
  return (
    <Card>
      This is Archive of Notification
      <Botton><Link href='/dashbord'>Back to default</Link></Botton>
    </Card>
  )
}

export default page
