import React, { FC } from 'react'

interface SubHeaderProps {
  postTitle: string
  date: string
}

const SubHeader: FC<SubHeaderProps> = ({ postTitle, date }) => {
  return (
    <div className="flex flex-col mb-10">
      <span className="text-3xl font-bold">{postTitle}</span>
      <span className="text-sm">{date}</span>
    </div>
  )
}

export default SubHeader
