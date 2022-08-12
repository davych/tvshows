import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import ShowIntro from '../ShowIntro';
import ShowInfo from '../ShowInfo';

export default class TVShowPage extends Component {
  render() {
    return (
      <div>
        <Grid container space = {2}>
          <Grid xs = {8} sx = {{
            
            }}>
              <ShowIntro />
            </Grid>
            <Grid xs = {4} sx = {{
            
            }}>
                <ShowInfo />
            </Grid>
        </Grid>
      </div>
    )
  }
}
