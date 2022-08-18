import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function index() {
  return (
    <Box sx={{
        flexGrow:1
    }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                {/* <ImageList sx={{
                    width:'100%'
                }}> */}
                        <ImageListItem /* key={this.props.showIntro.img} */sx = {{
                            width: '100%',
                            height: '200px'
                        }}>
                            { <img
                                src='https://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg'
                                alt={'这里有一张图片'}
                                loading="lazy"
                            /> }
                            <ImageListItemBar
                                title={"这里有一张图片"}
                                
                            />
                        </ImageListItem>
                {/* </ImageList> */}
            </Grid>
            <Grid item xs={8}>
                <div className='introduction' style={{
                    color: 'black',
                    padding: '10px',
                    textAlign: 'left'
                }}>
                    <p >
                    The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to "fight like a girl."
                    </p>
                </div>
                <div className='social-btn'>social button</div>
            </Grid>
        </Grid>
    </Box>
  )
}


