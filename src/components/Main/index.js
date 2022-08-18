import React from 'react';
import  Grid from '@mui/material/Grid';
import TVShowPage from '../TVShowPage';

export default function Main() {
  // let breadsValue = ["Main","Episodes","Seasons","Cast","Crew","Characters","Gallery","News"];
  return (
    <div style={{
      width: '90%',
      height: '400px',
      margin: '0 auto',
      marginTop: '10px'
    }}>
      <Grid container space = {2}>
        <Grid xs = {12} >
          <TVShowPage />
        </Grid>
      </Grid>
    </div>
  )
}


