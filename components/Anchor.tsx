import React, { FC, ReactNode } from 'react'

interface AnchorProps {
  children: ReactNode
  url: string
}

const Anchor: FC<AnchorProps> = ({ children, url }) => {
  return (
    <a className="text-green-400 font-bold" href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default Anchor
