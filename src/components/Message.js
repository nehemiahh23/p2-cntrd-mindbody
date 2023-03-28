import React from 'react'

function Message({ submit }) {
  if (submit) {
    return (
      <div>Message</div>
    )
  }
  else {
    return null
  }
}

export default Message