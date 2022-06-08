import React, { FC } from 'react'

const Preview = ({ previewText }: { previewText?: string }) => {
  return (
    <div className="bg-gray-200 text-black p-4 rounded-md mt-4 mb-8 group-hover:bg-yellow-100">
      <p className="h-full line-clamp-6 text-lg">{previewText}</p>
    </div>
  )
}

export default Preview
