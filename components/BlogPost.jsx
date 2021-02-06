import React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

const BlogPost = (props) => {
  return (
    <div id={props.post.id} className="blogPost w-full">
      <div id="postInnerData" className="flex flex-col content-center">
        <div className="flex items-center">
          <span id="postTitle" className="text-4xl font-bold pl-4">
            {props.post.title}
          </span>
          <div className="p-4">
            <div
              id="postNumber"
              className="font-bold w-32 text-white text-lg bg-gray-800 text-center p-2 tracking-wide rounded-lg "
            >
              postArr
              <span className="text-white ">[</span>
              <span className="text-purple-400 ">{props.post.id}</span>
              <span className="text-white ">]</span>
            </div>
          </div>
        </div>
        <span id="postDate" className="text-sm italic pb-2 pl-4">
          {props.post.date}
        </span>
        <span id="postContent" className=" text-2xl pb-2 sm:w-full pl-4 pr-4 sm:text-sm">
          {parse(props.post.content)}
        </span>
      </div>
    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.object,
}

export default BlogPost
