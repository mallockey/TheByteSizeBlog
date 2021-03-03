import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import JsxParser from 'react-jsx-parser'

const BlogPost = (props) => {
  return (
    <div id={props.post.id} className="blogPost w-full">
      <div className="flex flex-col">
        <div className="flex items-center sm:flex-col sm:items-start ">
          <span className="text-4xl font-bold pl-4 w-1/3 sm:w-full ">{props.post.title}</span>
          <div className="sm:pl-4">
            <Link href={`posts/${props.post.id}`}>
              <div className="blogPostArr hover:bg-yellow-300 cursor-pointer">
                <span className="text-blue-400">postArr</span>
                <span className="text-white ">[</span>
                <span className="text-purple-400 ">{props.post.id}</span>
                <span className="text-white">]</span>
              </div>
            </Link>
          </div>
        </div>
        <span className="text-sm italic pb-4 pl-4">{props.post.dateString}</span>
        <span className=" text-2xl pb-2 sm:w-full p-4">
          <JsxParser
            bindings={{
              vs2015: vs2015,
            }}
            components={{ CopyBlock }}
            jsx={props.post.content}
          />
        </span>
        <div className="p-4 mt-6 w-full flex sm:text-sm items-center">
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

BlogPost.propTypes = {
  post: PropTypes.object,
}

export default BlogPost
