import React, { memo } from 'react'

import useResizeWindow from '../../hooks/useResizeWindow';

function MemoProduct({ name, handleShowProduct }) {
  console.log("render MemoProduct")
  const isWindowSmall = useResizeWindow();

  console.log('isWindowSmall MemoProduct: ', isWindowSmall)


  return (
    <div>
        name product: {name}

        <button type="button" onClick={handleShowProduct}>show product</button>
    </div>
  )
}

export default memo(MemoProduct)


// function areEqual(prevProps, nextProps) {
//   console.log('prevProps: ', prevProps);
//   console.log('nextProps: ', nextProps);

//   return prevProps === nextProps
// }