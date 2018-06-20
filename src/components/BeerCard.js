import React from 'react'

// arrow function in a variable
const BeerCard = ({id, name, image_url, description}) => {
    return <div key={id} className="card">
          <div className="card-title">
            <h2>{name}</h2>
          </div>
          <div className="card-body">
            <img src={image_url} alt={name}/>
            <p>{description}</p>
          </div>
        </div>
}

export default BeerCard