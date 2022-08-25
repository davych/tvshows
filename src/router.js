import { useRoutes } from 'react-router-dom'

import { TVShowRouter } from './modules/tvshow/router'

export const AppRouter = () => {
  const element = useRoutes([
    TVShowRouter
  ])
  return element
}
