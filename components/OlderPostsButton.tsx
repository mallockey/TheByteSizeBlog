import React, { FC } from 'react'

interface OlderPostsButtonProps {
  buttonDisabled: boolean
  handleShowOlderPosts: () => void
}

const OlderPostsButton: FC<OlderPostsButtonProps> = ({ buttonDisabled, handleShowOlderPosts }) => {
  const styleForButton = buttonDisabled
    ? 'bg-primary text-white text-2xl rounded-lg p-4 text-yellow-300 cursor-not-allowed opacity-50 shadow-lg md:p-4 sm:p-4'
    : 'bg-primary text-white text-2xl rounded-lg p-4 shadow-lg bg-blue-400 md:p-4 sm:p-4 md:hover:bg-yellow-200 hover:text-black'

  return (
    <div className="w-full mt-10 mb-10 justify-start flex text-lg">
      <button
        disabled={buttonDisabled}
        className={styleForButton}
        type="button"
        onClick={handleShowOlderPosts}
      >
        {buttonDisabled ? 'No more posts' : 'Older posts'}
      </button>
    </div>
  )
}

export default OlderPostsButton
