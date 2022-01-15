import React from 'react'

function MainLayout({children}) {
  return (
    <div>
      <header>
        header
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}

export default MainLayout
