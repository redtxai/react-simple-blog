import {
  FETCHING_POSTS_DATA,
  FETCHED_POSTS_DATA,
  FETCHING_AUTHORS_DATA,
  FETCHED_AUTHORS_DATA,
  ROUTE_CHANGED
  } from './types'
import axios from 'axios'

const apiBase = 'http://www.mocky.io/v2'
const apiPostsUrl = '/5be5e3fa2f000082000fc3f8'
const apiAuthorsUrl = '/5be5e3ae2f00005b000fc3f6'

export const fetchingPostsData = () => {
  return {
    type: FETCHING_POSTS_DATA,
    fetchingPostsData
  }
}

export const fetchPostsData = () => {
  return (dispatch) => {
    dispatch(fetchingPostsData())
    return axios.get(`${apiBase}${apiPostsUrl}`)
      .then(({ data }) => {
        dispatch(fetchedPostsData(data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const fetchedPostsData = (postsData) => {
  return {
    type: FETCHED_POSTS_DATA,
    fetchedPostsData,
    postsData
  }
}

export const fetchingAuthorsData = () => {
  return {
    type: FETCHING_AUTHORS_DATA,
    fetchingAuthorsData
  }
}

export const fetchAuthorsData = () => {
  return (dispatch) => {
    dispatch(fetchingAuthorsData())
    return axios.get(`${apiBase}${apiAuthorsUrl}`)
      .then(({ data }) => {
        dispatch(fetchedAuthorsData(data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const fetchedAuthorsData = (authorsData) => {
  return {
    type: FETCHED_AUTHORS_DATA,
    fetchedAuthorsData,
    authorsData
  }
}

export const routeChanged = (routeState) => {
  return {
    type: ROUTE_CHANGED,
    routeState
  }
}
