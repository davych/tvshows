import React, { Component } from 'react';
import Grid from '@mui/material/Grid';

export default class BreadCrumbs extends Component {
    constructor( props ){
        super(props)
    }

  render() {
    return (
      <Grid container spacing={2}>
        {this.props.breads.map( (bread) => (
            <Grid item  sx={{
              color:"black"
            }}>
              {bread}
            </Grid>
        ))}
      </Grid>
    )
  }
}
