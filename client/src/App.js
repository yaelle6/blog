import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core'
import Posts from './Components/Posts'
import Post from './Components/Post'
import ModifyPost from './Components/ModifyPost'
import Navbar from './Components/Navbar'

const useStyles = makeStyles((theme) => ({
  container:{
    marginTop: '70px'
  }
}));

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container className={classes.container}>
            <Switch>
              <Route exact path='/' component={Posts}/>
              <Route exact path='/posts/add' component={ModifyPost}/>
              <Route path='/posts/:id' component={Post}/>
            </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default App;
