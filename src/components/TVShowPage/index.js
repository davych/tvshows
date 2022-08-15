import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import ShowIntro from '../ShowIntro';
import ShowInfo from '../ShowInfo';
import { useNavigate } from "react-router-dom";


const TVShowPage = ({ id, title }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    console.log("movie is clicked", id)
    navigate(`/${id}/details`, { replace: true });
  }

  return (
    <div>
      <p style={{ color: 'red' }}>{title}</p>
      <Grid container space={2} onClick={() => handleClick()} style={{ cursor: 'pointer' }}>
        <Grid xs={8} sx={{

        }}>
          {title}
          <ShowIntro />
        </Grid>
        <Grid xs={4} sx={{

        }}>
          <ShowInfo />
        </Grid>
      </Grid>
    </div>
  )
}

export default TVShowPage;
