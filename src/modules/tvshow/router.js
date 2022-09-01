import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import DefaultLayout from '../../layout/DefaultLayout'

import Detail from './Detail'
import TVList from './TVList'

export const TVShowRouter = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '/',
      element: (<Button variant='contained' color='success'>
                  <Link to='/tvshows' >Click</Link>
                </Button>)
    },
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
