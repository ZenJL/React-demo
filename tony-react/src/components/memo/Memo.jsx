import React, { useState, useCallback, useMemo } from 'react';

import MemoForm from './MemoForm';
import MemoProduct from './MemoProduct';

import useResizeWindow from '../../hooks/useResizeWindow';

function Memo() {
  const [name, setName] = useState('truong');
  const isWindowSmall = useResizeWindow();

  const oddNumber = useMemo(() => {
    return 2 + 2
  }, [])
  
  const handleShowProduct = useCallback(() => {
    console.log("handleShowProduct: ")
  }, [])

  console.log('oddNumber: ', oddNumber)
  console.log('isWindowSmall: ', isWindowSmall)
  
  return (
    <div>
      <MemoForm name={name} setName={setName} />

      <MemoProduct handleShowProduct={handleShowProduct} />
    </div>
  )
}

export default Memo
