import React from 'react'

function MemoForm({name, setName}) {
  console.log("render MemForm")

  return (
    <div>
      name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default MemoForm
