import React from 'react'

const child = (props) => {
  return (
    <div style={{color : "red"}}>{props.children}</div>
  )
}

export default child