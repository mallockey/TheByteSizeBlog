import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-around items-center text-white w-full h-28 border-b-2">
      <a className="flex items-center justify-center mt-2 mb-2" href="/">
        <img height="50" width="50" src="/images/header/codeIcon.PNG"></img>
        <span className="text-black ml-2 text-lg">The Byte Size Blog</span>
      </a>
    </div>
  )
}

export default Header
