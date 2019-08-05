import React, { Fragment } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from '../components/Header'
import LateralNavBar from '../components/LateralNavBar'
import HomePage from '../views/HomePage'
import PostPage from '../views/PostPage'
import AboutPage from '../views/AboutPage'

function Routes(props) {
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>
        <LateralNavBar/>
        <Switch>
          <Route exact path="/about" render={(props) => { 
            return <AboutPage {...props} />
          }}/>
          <Route exact path="/" render={(props) => { 
            return <HomePage {...props} />
          }}/>
          <Route exact path="/:id" render={(props) => { 
            return <PostPage {...props} />
          }}/>
          <Route path="*" render={(props) => { 
            return <HomePage {...props} />
          }}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default Routes
