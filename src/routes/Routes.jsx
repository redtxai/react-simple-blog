import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { routeChanged } from '../actions'

import Header from '../components/Header'
import LateralNavBar from '../components/LateralNavBar'
import HomePage from '../views/HomePage'
import PostPage from '../views/PostPage'
import AboutPage from '../views/AboutPage'

class Routes extends Component {
  constructor (props) {
    super(props)
    this.onRouteChange = this.onRouteChange.bind(this)
  }

  onRouteChange (routeState) {
    const { routeChanged } = this.props
    routeChanged(routeState)
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header/>
          <LateralNavBar/>
          <Switch>
            <Route exact path="/about" render={(props) => { 
              this.onRouteChange('about')
              return <AboutPage {...props} />
            }}/>
            <Route exact path="/" render={(props) => { 
              this.onRouteChange('home')
              return <HomePage {...props} />
            }}/>
            <Route exact path="/:id" render={(props) => { 
              this.onRouteChange('post')
              return <PostPage {...props} />
            }}/>
            <Route path="*" render={(props) => { 
              this.onRouteChange('home')
              return <HomePage {...props} />
            }}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    routeChanged: (routeState) => {
      dispatch(routeChanged(routeState))
    }
  }
}

export default connect(null, mapDispatchToProps)(Routes);
