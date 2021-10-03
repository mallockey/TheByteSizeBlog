import React from 'react'
const Main = () => {
  return (
    <div className="flex flex-col w-full justifty-center flex-grow">
      <div className="flex items-center flex-col">
        <div className="text-2xl font-bold">
          <a className=" text-current no-underline" href="/posts/AccidentlyModifyingState">
            <div className=" flex  flex-col m-12 hover:text-blue-500 cursor-pointer">
              <span>Accidently Modifying State</span>
              <span className="text-sm">August 15th, 2:54 PM</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main
