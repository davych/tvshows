import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import List from '../modules/tvshow/List'

export default function DetailLayout() {
  return (
    <Fragment>
        <List />
        <Outlet />
    </Fragment>
  )
}
