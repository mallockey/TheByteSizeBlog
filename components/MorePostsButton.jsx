import React from 'react'
import PropTypes from 'prop-types'

const MorePostsButton = (props) => {
  return (
    <button
      type="button"
      disabled={props.noMorePosts ? true : false}
      className={props.noMorePosts ? 'noMorePostsBtn' : 'morePostsBtn'}
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
