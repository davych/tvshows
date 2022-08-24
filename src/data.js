const episodes = [
  { number: '39', date: 'Jun 16, 2019', name: 'Sideline Dad' },
  { number: '38', date: 'Jun 16, 2019', name: 'The Oct-father' }
]

export function getEpisodes () {
  return episodes
}
export function getEpisode (number) {
  return episodes.find(
    (episode) => episode.number === number
  )
}
