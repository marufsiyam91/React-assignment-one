import React from 'react'
import './Comment.css'

const Comment = ({comment: {userName, comment}}) => {
  return (
    <div className='comment-cart'>
          <h5>{userName}</h5>
          <h5>{comment}</h5>
    </div>
  )
}

export default Comment
