import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <div className="flex justify-around items-center text-white w-full h-28 border-b-2">
      <a href="/">
        <img src="/images/header/headerLogo.png"></img>
      </a>
    </div>
  )
}

export default Header
