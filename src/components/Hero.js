import React from 'react'

const Hero = ({hero}) => {
  const { body, backgroundImage, logoImage, backgroundAlt, logoAlt } = hero

  return(
    <div>
      <h1>Welcome to <span>Space Squid Creative</span></h1>
      <p>{body}</p>
      <div>
        <img src={logoImage} alt={logoAlt}/>
        <img src={backgroundImage} alt={backgroundAlt}/>
    </div>
    </div>
  )
}

export default Hero