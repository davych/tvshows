import Paper from '@mui/material/Paper'
import axios from 'axios'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail () {
  const params = useParams()
  const [show, setShow] = React.useState(
    {
      id: 1,
      url: 'https://www.tvmaze.com/shows/1/under-the-dome',
      name: 'Under the Dome',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Drama',
        'Science-Fiction',
        'Thriller'
      ],
      status: 'Ended',
      runtime: 60,
      averageRuntime: 60,
      premiered: '2013-06-24',
      ended: '2015-09-10',
      officialSite: 'http://www.cbs.com/shows/under-the-dome/',
      schedule: {
        time: '22:00',
        days: [
          'Thursday'
        ]
      },
      rating: {
        average: 6.5
      },
      weight: 99,
      network: {
        id: 2,
        name: 'CBS',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York'
        },
        officialSite: 'https://www.cbs.com/'
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 25988,
        thetvdb: 264492,
        imdb: 'tt1553656'
      },
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg'
      },
      summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      updated: 1631010933,
      _links: {
        self: {
          href: 'https://api.tvmaze.com/shows/1'
        },
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/185054'
        }
      }
    }
  )
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
