import SearchIcon from '@mui/icons-material/Search'
import { Button, Paper, IconButton, InputBase, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'

export default function Header () {
  return (
      <div>
        <Box>
        <Grid container spacing={2} sx={{
          backgroundColor: '#282c34',
          mt: '10px'
        }}>
            <Grid xs={3} sx={{
              backgroundColor: 'lightgrey',
              fontSize: '40px'
            }}>
              LOGO
            </Grid>
            <Grid xs={6}>
                <Paper component="form" sx={{
                  p: '2px 4px',
                  ml: 5,
                  display: 'flex',
                  alignItems: 'center',
                  width: 400
                }}>
                    <InputBase sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Google Maps"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
            <Grid xs={3}>
                <Button color='success' sx={{
                  float: 'right',
                  mr: '20px',
                  fontSize: '20px'

                }}>LOGIN</Button>
                <Button color='success' sx={{
                  float: 'right',

                  mr: '20px',

                  fontSize: '20px'

                }}>REGISTER</Button>
            </Grid>
        </Grid>
        </Box>

    </div>
  )
}
