import React from 'react'
import PortfolioTile from './PortfolioTile'

const Portfolio = ({portfolio}) => {
  
  return(
    <div>
      {portfolio.map((project)=>
        <PortfolioTile key={project.id} project={project}/>
      )}
    </div>
  )
}

export default Portfolio