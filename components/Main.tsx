import React, { useEffect, useState, FC, Fragment } from 'react'
import Anchor from './Anchor'
import listOfPosts from '../listOfPosts'
import { determineIfNew } from '../utils/helperFunctions'

const NUM_POSTS_SHOWN = 3

interface Post {
  title: string
  date: string
  link: string
  dateStamp: string
}

const Main: FC = () => {
  const [numPostsShown, setNumPostsShown] = useState<number>(NUM_POSTS_SHOWN)
  const [shownPosts, setShownPosts] = useState<Post[]>([])
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)

  const styleForButton = buttonDisabled
    ? 'bg-primary text-white rounded-lg p-4 text-yellow-300 cursor-not-allowed opacity-50 md:p-4 sm:p-0'
    : 'bg-primary text-white rounded-lg p-4 hover:bg-buttonHover md:p-4 sm:p-0'

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
      <div className="mt-10 md:p-0 pr-10 pl-10 flex w-full flex-col items-start md:justify-between text-2xl font-bold md:w-1/3">
        {shownPosts.map((post, index) => {
          return (
            <Fragment key={`${post.title}_${index}`}>
              <Anchor url={post.link} styleString="mb-10 text-current no-underline">
                <div className=" flex  flex-col hover:text-blue-500 cursor-pointer">
                  <div className="flex items-center">
                    <span>{post.title}</span>
                    {determineIfNew(post.dateStamp) && (
                      <span className="bg-yellow-200 text-center p-1 ml-4 rounded w-8 text-xs">
                        New
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col justify-between text-sm">
                    <span>{post.date}</span>
                  </div>
                </div>
              </Anchor>
            </Fragment>
          )
        })}
      </div>
      <div className="md:w-1/3 sm:w-full mt-10 mb-10">
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
