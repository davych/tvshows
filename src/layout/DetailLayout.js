import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import TVList from '../modules/tvshow/TVList'

export default function DetailLayout () {
  return (
    <Fragment>
        <TVList />
        <Outlet />
    </Fragment>
  )
}
