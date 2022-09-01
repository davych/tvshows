import axios from 'axios'

export function getShowByID (id) {
  return axios.get('https://api.tvmaze.com/shows/' + id)
}

export function getShows () {
  return axios.get('https://api.tvmaze.com/shows')
}
