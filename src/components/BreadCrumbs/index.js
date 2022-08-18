import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { NavLink, Outlet } from 'react-router-dom';

export default function BreadCrumbs(props) {
  return (
    <Box>
      <Grid container spacing={4}>
            {props.breads.map( (bread) => (
              <Grid item>
                <NavLink to={`/${bread}`}>{bread}</NavLink>
              </Grid>
            ))}
      </Grid>
      <Outlet />
    </Box>
  )
}