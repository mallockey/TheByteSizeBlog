import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PostContainer = ({ children }: Props) => {
  return <div className="flex flex-col h-full">{children}</div>
}

export default PostContainer
