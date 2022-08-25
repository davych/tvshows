import DefaultLayout from '../../layout/DefaultLayout'
import DetailLayout from '../../layout/DetailLayout'

import Detail from './Detail'

export const TVShowRouter = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: 'tvshows',
      element: <DetailLayout />,
      children: [
        {
          path: 'detail/:number',
          element: <Detail />
        }
      ]
    }

  ]
}
