import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import HomePage from '../views/HomePage'

class Routes extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="*" component={HomePage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
