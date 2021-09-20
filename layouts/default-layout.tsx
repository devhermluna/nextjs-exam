import React from 'react'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = ({
  children
}: Props) => {
  return (
    <div className="container -my-60 pb-20 relative">
      {children}
    </div>
  )
}

export default DefaultLayout
