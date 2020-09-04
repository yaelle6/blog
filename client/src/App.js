import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from './Components/Posts'
import ModifyPost from './Components/ModifyPost'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Posts}/>
          <Route exact path='/posts/add' component={ModifyPost}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
