import React from 'react'
import { useAppContext } from '../context/appContext';

function CommentDetail() {
  const { todoItem } = useAppContext();
  console.log('comment detail: ', todoItem)

  return (
    <div>
      this is comment detail: 
      {todoItem?.id}
    </div>
  )
}

export default CommentDetail
