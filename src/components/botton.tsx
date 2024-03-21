import React from 'react'

const botton = ({children}:{children:React.ReactNode}) => {
  return (
    <button className=" p-2 text-center shadow-sm rounded-md bg-slate-200 text-blue-500">
      {children}
    </button>
  )
}

export default botton
