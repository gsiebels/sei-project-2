import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      episodes: [
      ],
      ep: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)


  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(res => this.setState({ episodes: res.data.results }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    // console.log(event.target.value)
    this.setState({ ep: e.target.value })
    console.log(this.state)

  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('sub')
    const a = this.state.episodes.filter(episode => episode.name === this.state.ep).pop().id
    console.log(a)
    this.props.history.push(`/episodes/${a}`)
  }



  render() {
    //console.log(this.state)
    
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
      </>

    )
  }
}

export default Home