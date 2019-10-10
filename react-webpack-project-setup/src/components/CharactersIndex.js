import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Characters extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => this.setState({ characters: res.data.results }))
      .catch(err => console.log(err))
  }


  render() {
    console.log('id check', this.state)
    const { id } = this.state
    // if (!this.state.results) return null
    return (
      <div>
        <h1>Characters</h1>
        {this.state.characters.map(character => (
          <Link key={character.name} to={`/characters/${character.id}`}>
            <div > {character.name} <img src={character.image} />
            </div>
          </Link>
        ))}

        {/* {this.state.characters.map(character => {
            return <div key={character.name}> {character.name} <img src={character.image} />
            </div>
          })} */}
      </div>
    )

  }
}

export default Characters