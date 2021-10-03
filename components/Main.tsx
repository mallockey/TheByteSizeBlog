import React, { useEffect, useState, FC, Fragment } from 'react'
import listOfPosts from '../listOfPosts'

const NUM_POSTS_SHOWN = 3

const Main: FC = () => {
  const [numPostsShown, setNumPostsShown] = useState(NUM_POSTS_SHOWN)
  const [shownPosts, setShownPosts] = useState([])
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const styleForButton = buttonDisabled
    ? 'bg-primary text-white rounded-lg p-4 text-yellow-300 cursor-not-allowed opacity-50'
    : 'bg-primary text-white rounded-lg p-4 hover:bg-buttonHover'

  function handleShowOlderPosts() {
    if (numPostsShown + NUM_POSTS_SHOWN > listOfPosts.length) {
      setNumPostsShown(listOfPosts.length)
      setButtonDisabled(true)
    } else {
      setNumPostsShown(numPostsShown + NUM_POSTS_SHOWN)
    }
  }

  useEffect(() => {
    setShownPosts(listOfPosts.slice(0, numPostsShown))
  }, [numPostsShown])

  return (
    <div className="flex flex-col w-full justifty-center items-center flex-grow justify-stretch">
      <div className=" mt-10 flex w-1/3 flex-col justify-between text-2xl font-bold">
        {shownPosts.map((post, index) => {
          return (
            <Fragment key={`${post.title}_${index}`}>
              <a className="mb-10 text-current no-underline" href={post.link}>
                <div className=" flex  flex-col hover:text-blue-500 cursor-pointer">
                  <span>{post.title}</span>
                  <span className="text-sm">{post.date}</span>
                </div>
              </a>
            </Fragment>
          )
        })}
      </div>
      <div className="w-1/3 mt-10 mb-10">
        <button
          disabled={buttonDisabled}
          className={styleForButton}
          type="button"
          onClick={handleShowOlderPosts}
        >
          {buttonDisabled ? 'No more posts' : 'Older posts'}
        </button>
      </div>
    </div>
  )
}

export default Main
