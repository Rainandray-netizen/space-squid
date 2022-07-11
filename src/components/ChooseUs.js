import React from 'react'

const ChooseUs = ({chooseUs}) => {
  const {header, body, cta} = chooseUs
  return(
    <div>
      <h1>{header}</h1>
      <p>{body}</p>
      <button>{cta}</button>
    </div>
  )
}

export default ChooseUs