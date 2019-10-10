import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      episodes: [
      ]
    }

  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(res => this.setState({ episodes: res.data.results }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    
    return (
      <>
        <h1>home</h1>
        <button>Characters</button>
        <h2>Episodes:</h2>
        <select>
          { this.state.episodes.map(episode => { 
            return <option key={ episode.id }> { episode.name } </option>
          })}
        
        </select>
      </>

    )
  }
}

export default Home