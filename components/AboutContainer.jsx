import React from 'react'

const AboutContainer = () => {
  return (
    <div className="aboutContainer sm:m-0 sm:p-0 sm:rounded-none">
      <div className="flex justify-between sm:items-center">
        <span className="flex text-3xl font-bold pb-2 justify-around sm:p-4 ">About Me</span>
      </div>
      <div className="flex items-center justify-around sm:flex-col">
        <div className="mr-4 sm:p-4">
          My name&apos;s Josh! Welcome to my blog where I talk about tech or anything that interests
          me. I&apos;m a software developer living in Brooklyn, New York. I enjoy building full
          stack applications using JavaScript and its related frameworks. When I&apos;m not coding I
          like to read and explore new cities.
        </div>
        <img src="/images/bow.jpg" className="h-56 rounded-xl sm:pb-4"></img>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-evenly w-48 sm:p-4">
          <a href="https://www.github.com/mallockey" target="_blank" rel="noreferrer">
            <img className="h-8 " src="/images/githubLight.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/joshuamelo1/" target="_blank" rel="noreferrer">
            <img className="h-8 " src="/images/linkedin.svg"></img>
          </a>
          <a href="https://twitter.com/JoshuaM33300257" target="_blank" rel="noreferrer">
            <img className="h-8 " src="/images/twitter.png"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutContainer
