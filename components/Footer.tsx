import React, { FC } from 'react'
import Anchor from './Anchor'

const Footer: FC = () => {
  return (
    <div className="flex pb-4 pt-10 justify-center m-4 items-center">
      <div className="flex border-t-2 pt-4 w-96 justify-center">
        <Anchor url="https://www.github.com/mallockey" external={true}>
          <img className="h-8 mr-4" src="/images/footer/Octocat.png"></img>
        </Anchor>
        <Anchor url="https://www.linkedin.com/in/joshuamelo1/" external={true}>
          <img className="h-8" src="/images/footer/LI-In-Bug.png"></img>
        </Anchor>
      </div>
    </div>
  )
}

export default Footer
