import React from 'react'

import ServiceTile from './ServiceTile'

const Services = ({services}) => {
  console.log(services)
  return(
    <>
    <h2>Services</h2>
      {services.map((service)=>
        <ServiceTile service={service} key={service.id}/>
      )}
    </>
  )
}

export default Services