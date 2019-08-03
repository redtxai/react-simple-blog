import React, { Component } from "react"
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { routeChanged } from '../actions'

import HomePage from '../views/HomePage'
import PostPage from '../views/PostPage'

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
      <BrowserRouter>
        <Switch>
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
