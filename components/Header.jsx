import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-28 flex justify-around text-white items-center border-gray-900 border-solid border-b">
      <a href="/">
        <img className="h-60" src="/images/headerLogo.png"></img>
      </a>
    </div>
  )
}

export default Header
