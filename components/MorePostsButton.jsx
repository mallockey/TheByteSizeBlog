import React from 'react'
import PropTypes from 'prop-types'

const MorePostsButton = (props) => {
  return (
    <button
      type="button"
      disabled={props.noMorePosts ? true : false}
      className={
        props.noMorePosts
          ? 'w-56 rounded-xl  h-16 bg-gray-800 outline-none  text-yellow-300 font-bold'
          : 'w-56 rounded-xl  h-16 bg-gray-800  text-white font-bold hover:bg-purple-500'
      }
      onClick={() => {
        props.setPage(props.page + 1)
      }}
    >
      {props.noMorePosts ? 'No more posts' : 'Older Posts'}
    </button>
  )
}

MorePostsButton.propTypes = {
  noMorePosts: PropTypes.bool,
  setPage: PropTypes.func,
  page: PropTypes.number,
}

export default MorePostsButton
