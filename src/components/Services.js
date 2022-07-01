import React from 'react'

import ServiceTile from './ServiceTile'

const Services = ({data}) => {
  return(
    <>
    <h2>Services</h2>
      {data.services.map((service)=>
        <ServiceTile service={service}/>
      )}
    </>
  )
}

export default Services