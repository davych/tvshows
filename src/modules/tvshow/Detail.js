import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { getEpisode } from '../../data';
import Paper from '@mui/material/Paper';
import Header from '../../../src/components/Header';

export default function Detail() {
    let params = useParams();
    let episode = getEpisode(params.number);
  return (
    <Fragment>
        <Header />
        <Paper sx={{
            pb: '10px'
        }}>
            <h2>{episode.name}</h2>
            <p>
                <span>{episode.number }</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{episode.date}</span>
                <Paper sx={{
                    width: '70%',
                    height: '100px',
                    border: '2px red solid',
                    m: '0 auto',
                    mt: '10px'
                }} />
            </p>
      </Paper>
    </Fragment>
  )
}
