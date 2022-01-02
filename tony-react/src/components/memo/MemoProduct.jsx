import React, { memo } from 'react'

function MemoProduct({ name }) {
  console.log("render MemoProduct")

  return (
    <div>
        name product: {name}
    </div>
  )
}

export default memo(MemoProduct)


// function areEqual(prevProps, nextProps) {
//   console.log('prevProps: ', prevProps);
//   console.log('nextProps: ', nextProps);

//   return prevProps === nextProps
// }