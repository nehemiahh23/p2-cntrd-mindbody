import React from 'react'

function Sidebar({ submit }) {
  if (submit) {
    return (
      <div>Sidebar</div>
    )
  }
  else {
    return null
  }
}

export default Sidebar