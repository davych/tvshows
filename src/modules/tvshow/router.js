import DefaultLayout from '../../layout/DefaultLayout'

import Detail from './Detail'
import TVList from './TVList'

export const TVShowRouter = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: 'tvshows',
      element: <TVList />
    },
    {
      path: 'tvshows/detail/:number',
      element: <Detail />
    }
  ]
}
