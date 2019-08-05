import {
  FETCHING_POSTS_DATA,
  FETCHED_POSTS_DATA,
  FETCHING_AUTHORS_DATA,
  FETCHED_AUTHORS_DATA,
  FETCHED_DATA
} from './types'
import axios from 'axios'

const apiBase = 'https://www.mocky.io/v2'
const apiPostsUrl = '/5be5e3fa2f000082000fc3f8'
const apiAuthorsUrl = '/5be5e3ae2f00005b000fc3f6'

export const fetchingPostsData = () => {
  return {
    type: FETCHING_POSTS_DATA,
    fetchingPostsData
  }
}

const fetchPostsData = async () => {
  const { data } = await axios.get(`${apiBase}${apiPostsUrl}`)
  return data
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

const fetchAuthorsData = async () => {
  const { data } = await axios.get(`${apiBase}${apiAuthorsUrl}`)
  return data
}

export const fetchedAuthorsData = (authorsData) => {
  return {
    type: FETCHED_AUTHORS_DATA,
    fetchedAuthorsData,
    authorsData
  }
}

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchingAuthorsData())
      const authorsData = await fetchAuthorsData()
      dispatch(fetchedAuthorsData(authorsData))

      dispatch(fetchingPostsData())
      const postsData = await fetchPostsData()
      dispatch(fetchedPostsData(parserPosts(postsData, authorsData)))
      dispatch(fetchedData())
    } catch(error) {
      throw(error)
    }
  }
}

export const fetchedData = () => {
  return {
    type: FETCHED_DATA,
    fetchedData: true
  }
}

const parserPosts = (postsData, authorsData) => {
  return postsData.map((post, index) => {
    post.id = index + 1
    const { authorId } = post.metadata
    post.metadata.authorName = authorsData.find((aut) => aut.id === authorId).name
    return post
  })
}
