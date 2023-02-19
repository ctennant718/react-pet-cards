import React from 'react'

function Surround({ children }) {
  return <div style={{border: "3px solid #FFB3BA", borderRadius: "1em"}}>{children}</div>;
}

export default Surround