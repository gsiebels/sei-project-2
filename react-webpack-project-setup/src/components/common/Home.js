import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      episodes: [
      ],
      characters: [],
      ep: '',
      random: '',
      images: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)


  }

  componentDidMount() {
    Promise.all([
      axios.get('https://rickandmortyapi.com/api/episode'),
      axios.get('https://rickandmortyapi.com/api/character')
    ])
      .then(res => {
        this.setState({ episodes: res[0].data.results , characters: res[1].data.results })
      })
      .catch(err => console.log(err))
  }

  handleChange(e) {
    // console.log(event.target.value)
    this.setState({ ep: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('sub')
    const a = this.state.episodes.filter(episode => episode.name === this.state.ep).pop().id
    console.log(a)
    this.props.history.push(`/episodes/${a}`)
  }

  handleClick() {
    this.setState({ 
      random: { ...this.state.episodes[Math.floor(Math.random() * this.state.episodes.length)] } 
    }, this.getCharacters)
  }

  getCharacters() {
    Promise.all(this.state.random.characters.map(character => axios.get(character)))
      .then(res => {
        const images = res.map(r => r.data.image)
        const characters = res.map(r => r.data)
        console.log(characters)
        this.setState({ images })
      })
      .catch(err => console.log(err))
  }

  render() {

    
    return (
      <>
        <>
          <Link to={'/characters'}>Characters</Link>     
        </>
        <h2>Episodes:</h2>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} name="episode">
            {this.state.episodes.map(episode => {
              return <option key={episode.id}> {episode.name}</option>
            })}
          </select>
          <button>Go!</button>        
        </form>
        <button className="button is-warning" onClick={this.handleClick}>Click me!</button>
        <div>
          <p>{this.state.random.name}</p> <img src={this.state.random.image}/>
          <p>{this.state.random.air_date}</p> 
          <div>
            {this.state.images && this.state.images.map(image => {
              return <img key={image} src={image} />
            })}
            
          </div>
        </div>
      </>

    )
  }
}

export default Home