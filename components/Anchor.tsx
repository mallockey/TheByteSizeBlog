import React, { FC, ReactNode } from 'react'

interface AnchorProps {
  children: ReactNode
  url: string
  styleString?: string
  external?: boolean
}

const Anchor: FC<AnchorProps> = ({ children, url, styleString, external = false }) => {
  return (
    <a
      className={styleString ? styleString : 'text-green-400 font-bold'}
      href={url}
      target={external ? '_blank' : null}
      rel={external ? 'noreferrer' : null}
    >
      {children}
    </a>
  )
}

export default Anchor
