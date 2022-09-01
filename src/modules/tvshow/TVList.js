import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React, { Fragment, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { getShows } from './services'
import { useStyle } from './styles'

export default function TVList () {
  const classes = useStyle()
  const [shows, setShows] = useState([])

  useEffect(() => {
    getShows()
      .then(function (response) {
        setShows(response.data)
      }).catch(function (error) {
        alert(error)
      })
  })
  return (
    <Fragment>
        <Grid className={classes.listContainer} spacing={2}>
            { shows.map((show) => (
                <Grid item lg={3} key={show.id}>
                    <NavLink className={classes.navLinkStyle}
                             key={show.id}
                             to={`/tvshows/detail/${show.id}`}
                            >
                        <Paper className={classes.listItem}>
                          <div className={classes.leftImg}>
                              <img src={show.image.medium} alt={show.name}></img>
                          </div>
                          <div className={classes.rightBrief} >
                            <h2>{show.name}</h2>
                            <div className={classes.summary}
                               dangerouslySetInnerHTML={{ __html: show.summary }}>
                            </div>
                          </div>
                        </Paper>
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    </Fragment>
  )
}
