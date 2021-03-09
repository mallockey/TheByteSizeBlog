import React from 'react'
import PropTypes from 'prop-types'
import { CodeBlock, vs2015 } from 'react-code-blocks'
import JsxParser from 'react-jsx-parser'

const SingleBlogPost = (props) => {
  return (
    <div id={props.post.id} className="singleBlogPost w-full">
      <div className="flex flex-col w-5/6 sm:w-full">
        <div className="flex items-center sm:flex-col sm:items-start">
          <span className="text-4xl font-extrabold pl-4 sm:w-full ">{props.post.title}</span>
        </div>
        <span className="text-sm italic pb-4 pl-4">{props.post.dateString}</span>
        <span className=" text-2xl pb-2 sm:w-full p-4">
          <JsxParser
            bindings={{
              vs2015: vs2015,
            }}
            components={{ CodeBlock }}
            jsx={props.post.content}
          />
        </span>
        <div className="flex p-4 border-t mt-6  w-full flex-wrap">
          <span className="text-lg mr-2">Tags:</span>
          {props.post.Tags
            ? props.post.Tags.split(',').map((tag, index) => {
                return (
                  <span key={index} className="rounded-lg bg-black text-white p-3 m-2">
                    {tag}
                  </span>
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}

SingleBlogPost.propTypes = {
  post: PropTypes.object,
}

export default SingleBlogPost
