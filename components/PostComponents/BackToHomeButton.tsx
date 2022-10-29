import React, { FC } from 'react'

interface OlderPostsButtonProps {
  disabled?: boolean
}

const BackToHomeButton: FC<OlderPostsButtonProps> = ({ disabled }) => {
  const styleForButton = disabled
    ? 'bg-primary text-white rounded-lg p-4 text-yellow-300 cursor-not-allowed opacity-50 shadow-lg md:p-4 sm:p-4'
    : 'bg-primary text-white rounded-lg p-4 shadow-lg md:hover:bg-yellow-200 hover:text-black md:p-4 sm:p-4'

  return (
    <div className="w-full mt-10 mb-10 justify-start flex text-lg">
      <button
        disabled={disabled}
        className={styleForButton}
        type="button"
        onClick={() => history.back()}
      >
        Back to home
      </button>
    </div>
  )
}

export default BackToHomeButton
