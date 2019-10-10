import React from 'react'
import axios from 'axios'


class EpisodeShow extends React.Component{
  constructor(){
    super()

    this.state = {
      episode: null
    }
  }

  componentDidMount() {
    const episodeId = this.props.match.params.id
    console.log(episodeId)
    
    // axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
    //   .then(res => this.setState({ episode: res.data.results }))
    //   .catch(err => console.log(err))
  }
  
  render() {
    return (
      <h1>EpisodeShow</h1>
    )
  }
}

export default EpisodeShow