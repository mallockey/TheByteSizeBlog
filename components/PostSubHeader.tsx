import React, { FC } from 'react'

interface PostSubHeaderProps {
  title: string
}

const PostSubHeader: FC<PostSubHeaderProps> = ({ title }) => {
  return (
    <div className="mb-2 mt-2">
      <span className="text-xl font-bold">{title}</span>
    </div>
  )
}

export default PostSubHeader
