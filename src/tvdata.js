import axios from 'axios'

export function getShows () {
  let shows = []
  axios.get('https://api.tvmaze.com/shows')
    .then(function (response) {
      shows = response.data
    }).catch(function (error) {
      alert(error)
    })
  return shows
}
