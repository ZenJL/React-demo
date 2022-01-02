import React, { useState } from 'react';

import MemoForm from './MemoForm';
import MemoProduct from './MemoProduct';

function Memo() {
  const [name, setName] = useState('truong')

  return (
    <div>
      <MemoForm name={name} setName={setName} />

      <MemoProduct name={name} />
    </div>
  )
}

export default Memo
