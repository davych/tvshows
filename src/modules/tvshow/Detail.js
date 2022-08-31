import Paper from '@mui/material/Paper'
import axios from 'axios'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail () {
  const params = useParams()
  const [show, setShow] = React.useState()
  React.useEffect(() => {
    axios.get('https://api.tvmaze.com/shows/' + params.number)
      .then(function (response) {
        setShow(response.data)
      }).catch(function (error) {
        alert(error)
      })
  })

  return (
    <Fragment>
        <Paper sx={{
          width: '80%',
          m: 'auto',
          mt: '20px',
          pb: '5px'
        }}>
            <h2 style={{ margin: 'auto', textAlign: 'center' }}>{show.name}</h2>
            <img src={show.image.medium} alt={show.name} style={{ display: 'block', margin: '10px auto' }} />
      </Paper>
    </Fragment>
  )
}
