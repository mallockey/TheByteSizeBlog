import React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

const BlogPost = (props) => {
  return (
    <div id={props.post.id} className="blogPost w-full">
      <div className="flex flex-col">
        <div className="flex items-center sm:flex-col sm:items-start">
          <span className="text-4xl font-bold pl-4 w-1/3 sm:w-full ">{props.post.title}</span>
          <div>
            <div className="blogPostArr sm:hidden">
              <span className="text-blue-400">postArr</span>
              <span className="text-white ">[</span>
              <span className="text-purple-400 ">{props.post.id}</span>
              <span className="text-white">]</span>
            </div>
          </div>
        </div>
        <span className="text-sm italic pb-4 pl-4">{props.post.date}</span>
        <span className=" text-2xl pb-2 sm:w-full p-4">{parse(props.post.content)}</span>
      </div>
    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.object,
}

export default BlogPost
