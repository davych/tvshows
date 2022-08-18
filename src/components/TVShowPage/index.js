import React from 'react';
import Grid from '@mui/material/Grid';
import EpisodeDetailPage from '../EpisodeDetailPage';

export default function TVShowPage() {
  return (
    <Grid container space = {2}>
          <Grid xs = {8}>
              <EpisodeDetailPage />
          </Grid>
        </Grid>
  )
}
