![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)


## Rick and Morty Info Page

![rick_and_morty](https://raw.githubusercontent.com/gsiebels/sei-project-2/master/Screenshot%202019-11-22%20at%2012.07.05.png)

This page uses a Publick Rick and Morty API. It's divided into 3 sections. The main section on the right has a button that generates a random episode and displays the characters that were on the episode. The top left section allows you to search for a specific episode, finally the bottom left section takes you to a page where you can see the characters with more detail. 

This was a project assigned to me by General Assembly during a software engineering immersive course. The purpose of the project was to solidify the skills we learned in the second module. This included learning react and interacting with public APIs. We were to put them to use in a project of our choice.

After learning react for a week and covering the use of API's in the same amount of time we were given a day and a half to complete this project. I worked on this pair programming with another student on the course.

 # Built With
 
- HTML5
- SCSS
- JavaScript
- React
- NPM
- Axios
- Rick and Morty API
- GitHub
 
 # Deployment
 
 The website is deployed on Heroku, you can see it here: https://rick-and-morty-fun-page.herokuapp.com/
 
 # Getting Started
 
 Use the clone button to download the source code. install npm packages in the root director using "npm i" in the src directory of the project. Then "npm run serve" to run on a local server. The assets used in this project are stored in the assets folder. They include gifs, png files and fonts.
 
# How It Works

The Page is divided into 3 sections, the main section allows you to click a button and generates a random episode giving you the name of the episode, and images of the characters starred on the episode. On the top left section you can select a specific episode that links you to a page with more information such as the date that was aired.

![rick_and_morty](https://raw.githubusercontent.com/gsiebels/sei-project-2/master/Screenshot%202019-11-22%20at%2012.08.45.png)

The bottom left section is a link that takes you to the index of the characters, clicking on one character links you to the characters personal page where you can also see more info about the character.
Here is a little example of the homepages logic:
```javascript
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

```

# Challenges and future improvements

The main challenge on this project was creating the axios calls and use them in the JSX section. Once I understood react the project was easier to make.

The main future improvements would be the style and the centering of the element.
I would simplify the code and the page.

# Author

Gerarod Siebels

