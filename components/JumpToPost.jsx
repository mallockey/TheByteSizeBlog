import React, { useEffect } from 'react'
import AboutContainer from './AboutContainer'
import PropTypes from 'prop-types'

const JumpToPost = (props) => {
  useEffect(() => {
    const searchInput = document.getElementById('searchInput')
    searchInput.focus()
    searchInput.addEventListener('keydown', (event) => {
      const previousSelectedPost = document.getElementsByClassName('blogPostSelected')
      if (previousSelectedPost.length > 0) {
        previousSelectedPost[0].className = 'blogPost'
      }
      const elementToScrollTo = document.getElementById(`${searchInput.value}`)
      if (elementToScrollTo === null || searchInput.value === '') {
        return
      }
      if (event.key === 'Enter') {
        elementToScrollTo.className = 'blogPostSelected'
        elementToScrollTo.scrollIntoView({ behavior: 'smooth' })
      }
    })

    return () => false
  }, [])

  return (
    <div
      className="flex  flex-col h-full w-full p-4 ml-12 sm:p-0 sm:ml-0 sm:justify-end
     "
    >
      <div className=" sticky top-4 ">
        <div className="jumpPostWhere sm:hidden">
          <span className="text-3xl text-green-500 pl-4">&#x2f;&#x2f;Jump to post</span>
          <div className="pl-4">
            <span className="text-blue-400">postArr</span>.
            <span className="text-yellow-300">where</span>(
            <span className="text-blue-400">&#123;</span>
            <span className="text-blue-300">id</span>=<span className="text-white"></span>
            <input
              id="searchInput"
              type="text"
              autoFocus={true}
              className="searchInputStyle"
              maxLength={props.blogPosts.length > 0 ? String(props.blogPosts.length).length : ''}
            />
            <span className="text-white">
              <span className="text-blue-400">&#125;</span>)
            </span>
          </div>
        </div>
        <AboutContainer />
      </div>
    </div>
  )
}

JumpToPost.propTypes = {
  blogPosts: PropTypes.array,
}

export default JumpToPost
