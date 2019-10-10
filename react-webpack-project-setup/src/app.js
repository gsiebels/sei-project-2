import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './components/common/Home'
import EpisodeShow from './components/EpisodeShow'

const App = () => (
  <BrowserRouter>
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/episodes/:id">Episode Show page</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/episodes/:id" component={EpisodeShow} />
      </Switch>
    </main> 
  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)