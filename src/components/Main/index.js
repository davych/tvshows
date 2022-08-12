import React, { Component } from 'react';
import  Grid from '@mui/material/Grid';
import BreadCrumbs from '../BreadCrumbs';
import TVShowPage from '../TVShowPage';
import EpisodeDetailPage from '../EpisodeDetailPage';

export default class Main extends Component {
  constructor( props ){
    super( props );
    this.state = {
      breadsValue:["Main","Episodes","Seasons","Cast","Crew","Characters","Gallery","News"]
    }
  }
  render() {
    return (
      <div style={{
        width: '90%',
        height: '400px',
        margin: '0 auto',
        marginTop: '10px'
      }}>
        <Grid container space = {2}>
          <Grid xs = {12} >
            <BreadCrumbs breads = {this.state.breadsValue}/>
          </Grid>
            <TVShowPage />
            {/* <EpisodeDetailPage /> */}
        </Grid>
      </div>
    )
  }
}
