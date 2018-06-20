import React from 'react'
import './BeerCard.css'

// arrow function in a variable
const BeerCard = ({
  id, 
  name, 
  image_url, 
  description,
  handleDelete
}) => {
    return <div key={id} className="card">
          <div className="card-body">
            <img src={image_url} alt={name}/>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className="card-footer">
            <button onClick={()=>{handleDelete(id)}} className="btn btn-danger move-right">Delete</button>
          </div>
        </div>
}

export default BeerCard