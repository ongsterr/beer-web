import React, { Component } from 'react';
import './App.css';
import BeerCard from './components/BeerCard'

// feed the state to the render (null)
// want fetch all the beers from the api
// want the fetched data in the state
// feed the updated state to the render

// 1. state √
// 2. componentDidMount (or in english fetch data when ready) √
// 3. fetch data (for now using js fetch) √
// 4. set the state with the data √
function parseBeer(beer) {
  const {id, name, description, image_url} = beer
  return {
    id,
    name,
    description,
    image_url,
  }
}

class App extends Component {

  state = {
    beers: null
  }

  componentDidMount() {
    const beerURL = 'http://localhost:3000/beers'
    fetch(beerURL)
      .then(res => res.json())
      .then(beersData => {

          // make the beer information less verbose
          const beers = beersData.map(parseBeer)

          this.setState({
            beers
          })
      })
      .catch(err => console.error(err))
  }

  deleteBeer = (id) => {
    const beerURL = `http://localhost:3000/beers/${id}`
    fetch(beerURL, {method: 'DELETE'})
      .then(res => res.json())
      .then(() => {
        this.setState(prevState => {
          return {
            beers: prevState.beers.filter(beer => beer.id !== id)
          }
        })
      })
      .catch(err => console.error(err))
  }


  render() {

    if(!this.state.beers) {
      return <div>Loading beers...</div> 
    }   
    
    const beers = this.state.beers.map(beer => {
      return <BeerCard handleDelete={this.deleteBeer} key={beer.id} {...beer} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Beer</h1>
        </header>
        <div className="card-row">

          {beers}
        </div>

      </div>
    );
  }
}

export default App;
