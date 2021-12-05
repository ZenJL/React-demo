import React from 'react'

import CommentDate from './CommentDate';
import CommentDescription from './CommentDescription';
import CommentUserInfo from './CommentUserInfo';

function ComposeComponent() {
  const comment = {
    date: '05/16/2021',
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
   
  return (
    <div>
      <CommentUserInfo name={comment.author.name} avatarUrl={comment.author.avatarUrl} />
      <CommentDescription description={comment.text} />
      <CommentDate date={comment.date} />
    </div>
  )
}

export default ComposeComponent
