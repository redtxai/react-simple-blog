import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Routes from './routes'
import { fetchData } from './actions'

import GlobalStyle from './themes/globalStyle'

class App extends Component {
  constructor(props) {
    super(props)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const { fetchedData, fetchData } = this.props
    if (!fetchedData) {
      fetchData()
    }
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Routes/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  fetchedData: state.reducer.fetchedData,
  routeState: state.reducer.routeState
})

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
