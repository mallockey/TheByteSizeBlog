import React, { useEffect } from 'react'
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
    <div className="flex-col h-full w-full p-4 ml-12 ">
      <div
        id="postNumber"
        className="flex flex-col font-bold text-white text-3xl bg-gray-800 rounded-xl  p-4 tracking-wide"
      >
        <span className="text-3xl text-green-500  pl-4">//Jump to post</span>
        <div className="pl-4">
          <span className=" text-blue-400">postArr</span>.
          <span className="text-yellow-300">where</span>(
          <span className="text-blue-400">&#123;</span>
          <span className="text-blue-300">id</span>=<span className="text-white"></span>
          <input
            id="searchInput"
            type="text"
            autoFocus={true}
            className="text-purple-400 h-12 bg-gray-800 text-center w-16 border-green-500 border-2 rounded border-solid"
            maxLength={props.blogPosts.length > 0 ? String(props.blogPosts.length).length : ''}
          />
          <span className="text-white">
            <span className="text-blue-400">&#125;</span>)
          </span>
        </div>
      </div>
      <div className="bg-gray-800 text-white rounded-xl mt-32 p-8 text-lg">
        <div className="flex justify-between">
          <span className="text-3xl font-bold pb-2 justify-around flex">About Me</span>
          <div>
            <div className="flex justify-evenly w-40">
              <a href="https://www.github.com/mallockey" target="_blank" rel="noreferrer">
                <img className="h-12" src="/images/githubLight.png"></img>
              </a>
              <a href="https://www.linkedin.com/in/joshuamelo1/" target="_blank" rel="noreferrer">
                <img className="h-12" src="/images/linkedin.svg"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div className="mr-4">
            My name&apos;s Josh! Welcome to my blog where I talk about tech or anything that
            interests me. I&apos;m a software developer living in Brooklyn, New York. I enjoy
            building full stack applications using JavaScript and its related frameworks. When
            I&apos;m not coding I like to read and explore new cities.
          </div>
          <img src="/images/bow.jpg" className="h-56 rounded-xl"></img>
        </div>
      </div>
    </div>
  )
}

JumpToPost.propTypes = {
  blogPosts: PropTypes.array,
}

export default JumpToPost
