import Paper from '@mui/material/Paper'
import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getShowByID } from './services'
import { useStyle } from './styles'

export default function Detail () {
  const [show, setShow] = useState()
  const params = useParams()
  const classes = useStyle()

  useEffect(() => {
    getShowByID(params.number)
      .then(function (response) {
        setShow(response.data)
      }).catch(function (error) {
        alert(error)
      })
  })

  return (
    <Fragment>
        {show
          ? (
          <Paper className={classes.detailCard}>
            <h2 className={classes.cardHeader}>{show.name}</h2>
            <img className={classes.cardImg} src={show.image.medium} alt={show.name} />
          </Paper>)
          : (<span>Loading...</span>) }
    </Fragment>
  )
}
