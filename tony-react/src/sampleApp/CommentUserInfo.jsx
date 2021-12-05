import React from 'react'

function Avatar({ avatarUrl }) {
  return (
    <img src={avatarUrl} alt="" />
  )
}

function CommentDescription({ name, avatarUrl }) {
  return (
    <div>
      <Avatar avatarUrl={avatarUrl} />
      <br />
      <h5>{name}</h5>
    </div>
  )
}

export default CommentDescription
