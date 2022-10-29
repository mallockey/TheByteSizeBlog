import React from 'react'

const Header = () => {
  return (
    <div className="flex text-white w-full h-28 border-b-2">
      <a className="flex items-center justify-center mt-2 mb-2" href="/">
        <img height="50" width="50" className='rounded-md border-2' src="/images/header/me.jpg"></img>
        <span className="ml-2 text-lg font-bold">The Byte Size Blog</span>
      </a>
    </div>
  )
}

export default Header
